/* 

what am I testing?

EMAIL SUBSCRIPTIONS

// phase I
- can subscribe an email
- can generate a pool of email subscribers
- can pick a winner

CONTACT DATABASE

// phase I
- can enter contact information
- can read contact information
- can link betw contact info and email subscriber?

*/

const expect = require('chai').expect;

const { syncAndSeed } = require('../server/db');
const Sub = require('../server/db/Sub');


describe('DATA LAYER | email subscriptions', () => {

  beforeEach(() => {
    return syncAndSeed({ force: true })
  });

  describe('email subscriptions', () => {

    it('there are 10 email subscribers', () => {
      return Sub.findAll()
        .then(emailSubs => expect(emailSubs.length).to.equal(10))
    });

    it('the email for exists', () => {
      return Sub.findOne({
        where: {
          email: 'picard@enterprise.com'
        }
      })
        .then(email => expect(email.email).to.equal('picard@enterprise.com'))
    });

    it('the email kirk@enterprise.com does NOT exist', () => {
      return Sub.findOne({
        where: {
          email: 'kirk@enterprise.com'
        }
      })
        .then(email => expect(email).to.equal(null))
    });

    it('a pool of email subscribers can be generated', () => {
      return Sub.genPool()
        .then(emails => expect(emails.length).to.equal(9))
    });

    it('can generate a winner', () => {
      return Sub.winner()
        .then(winner => expect(winner.email).to.exist)
    });

  });

});
