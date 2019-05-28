const conn = require('./conn');
const bcrypt = require('bcrypt');
const saltRounds = 12;

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
  return bcrypt.hash(sub.email, saltRounds)
    .then(hash => {
      hash = hash.replace("/", "-")
      sub.verifyHash = hash
    })
    .catch(error => console.log(error))
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

module.exports = Sub;
