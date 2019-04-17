const conn = require('./conn');

const Contact = conn.define('contact', {
  
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  message: {
    type: conn.Sequelize.TEXT,
    allowNull: false
  }

});



module.exports = Contact;
