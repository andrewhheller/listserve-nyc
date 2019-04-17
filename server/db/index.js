const conn = require('./conn');

const Sub = require('./Sub');
const Contact = require('./Contact');

Sub.belongsTo(Contact);

const syncAndSeed = () => {
  conn.sync({ force: true })
    .then(() => {
      Sub.create({
        email: 'picard@enterprise.com',
        subStatus: 'subscribed'
      }),
      Sub.create({
        email: 'riker@enterprise.com',
        subStatus: 'subscribed'
      }),
      Sub.create({
        email: 'data@enterprise.com',
        subStatus: 'subscribed'
      }),
      Sub.create({
        email: 'geordi@enterprise.com'
      }),
      Sub.create({
        email: 'worf@enterprise.com',
        subStatus: 'unsubscribed'
      }),
      Sub.create({
        email: 'deanna@enterprise.com'
      }),
      Sub.create({
        email: 'beverly@enterprise.com'
      }),
      Sub.create({
        email: 'wesley@enterprise.com',
        subStatus: 'subscribed'
      }),
      Sub.create({
        email: 'barclay@enterprise.com'
      }),
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
