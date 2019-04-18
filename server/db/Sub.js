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

Sub.winner = () => {
  return Sub.genPool()
    .then(emails => emails[Math.floor(Math.random() * emails.length)])
}



module.exports = Sub;
