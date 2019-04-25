const conn = require('./conn');

const Sub = require('./Sub');
const Contact = require('./Contact');

Sub.belongsTo(Contact);



const syncAndSeed = () => {
  return conn.sync({ force: true })
    .then(() => {

      // preset email bank
      const emails = [
        'picard@enterprise.com',
        'riker@enterprise.com',
        'data@enterprise.com',
        'geordi@enterprise.com',
        'worf@enterprise.com',
        'deanna@enterprise.com',
        'beverly@enterprise.com',
        'wesley@enterprise.com',
        'barclay@enterprise.com'
      ]

      // create email row with element email from above
      emails.forEach(email => Sub.create({ email }))

      // set winner row
      Sub.create({
        email: 'andrew@enterprise.com',
        subStatus: 'subscribed',
        prize: 'winner'
      })
    })
    .then(() => {
      Promise.all([
        Contact.create({
          name: 'Jean-Luc Picard',
          email: 'picard@enterprise.com',
          message: 'hello from the Captain'
        }),
        Contact.create({
          name: 'William T. Riker',
          email: 'riker@enterprise.com',
          message: 'hello from the commmander'
        }),
        Contact.create({
          name: 'Data',
          email: 'data@enterprise.com',
          message: 'hello from the science officer'
        })
      ])
    })
}


module.exports = {
  syncAndSeed,
  models: {
    Sub,
    Contact
  }
}
