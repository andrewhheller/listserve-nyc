const express = require('express');
const router = express.Router();

const transporter = require('../utils/email');

const FROM_EMAIL = process.env.FROM_EMAIL;

const { Sub } = require('../db').models;

router.get('/', (req, res, next) => {
  Sub.genPool()
    .then(pool => res.send(pool))
    .catch(error => next(error))
});

router.get('/winner', (req, res, next) => {
  return Sub.winner()
    .then(winner => res.send(winner))
    .catch(error => next(error))
})

router.post('/', (req, res, next) => {
  
  // grab email from POST
  const email = req.body.email;

  // find or create row
  Sub.findOrCreate({
    where: {
      email
    }
  })
    .then(result => {

      // send result array to front end
      res.send(result) // result is array where [0] = instance and [1] = wasCreated boolean

      /* email verification message */
      const message =
        `Thanks for subscribing!
         Please click <a href="www.google.com>here</a> to confirm your subscription.
        `
  
      const mailOptions = {
        from: FROM_EMAIL,
        to: email,
        subject: 'listserve NYC Subscription',
        html: '<p>Thanks for subscribing!</p>  <p>Please click <a href="http://www.google.com" target="blank">here</a> to confirm your subscription.</p>'
      }

      transporter.sendMail(mailOptions, (error, data) => {

        if(error) {
          res.json({
            msg: 'fail'
          })
        }

        else {
          res.json({
            msg: 'success'
          })
        }

      })

    })  
    .catch(error => next(error))
});




module.exports = router;
