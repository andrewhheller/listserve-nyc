const conn = require('./conn');
const hash = require('string-hash')

const Sub = conn.define('sub', {

  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  },

  email: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  subStatus: {
    type: conn.Sequelize.ENUM('subscribed', 'verified', 'unsubscribed'),
    defaultValue: 'subscribed',
    allowNull: false
  },

  prize: {
    type: conn.Sequelize.ENUM('ondeck', 'winner', 'noresponse', 'rejected'),
    defaultValue: 'ondeck',
    allowNull: false
  },

  verifyHash: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true
  }

});

// generate and save hash of subscriber's email into verifyHash when subscription row is created (hook)
Sub.beforeValidate(sub => {
  sub.verifyHash = hash(sub.email);
})

// generate pool of current email subscribers who can win
Sub.genPool = () => {
  return Sub.findAll({
    where: { subStatus: 'verified', prize: 'ondeck' }
  })
}

// generate winner
Sub.winner = () => {

  // invoke generate pool function
  return Sub.genPool()

    .then(emails => {

      // calculate winner (random)
      const winner = emails[Math.floor(Math.random() * emails.length)];

      // find winner by ID and update prize status to winner
      Sub.findById(winner.id)
        .then(sub => {
          sub.update({ prize: 'winner' })
        })

      // return winner (will be sent back by API)
      return winner;
    })
}

console.log(Sub.winner());

module.exports = Sub;
