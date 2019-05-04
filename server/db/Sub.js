const conn = require('./conn')

const Sub = conn.define('sub', {

  email: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  subStatus: {
    type: conn.Sequelize.ENUM('pending', 'subscribed', 'unsubscribed'),
    defaultValue: 'subscribed',
    allowNull: false
  },

  prize: {
    type: conn.Sequelize.ENUM('ondeck', 'winner', 'noresponse', 'rejected'),
    defaultValue: 'ondeck',
    allowNull: false
  },

});

// generate pool of current email subscribers who can win
Sub.genPool = () => {
  return Sub.findAll({
    where: { subStatus: 'subscribed', prize: 'ondeck' }
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
