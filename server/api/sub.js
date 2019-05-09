const express = require('express');
const router = express.Router();
const path = require('path');
const hash = require('string-hash');

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
        `
          <p>Thanks for subscribing!</p>
          <p>Please click
            <a href="http://${ req.get('host') }/api/sub/verify/${ hash(email) }" target="blank">here</a>
          to confirm your subscription.</p>
        `
  
      const mailOptions = {
        from: FROM_EMAIL,
        to: email,
        subject: 'listserve NYC Subscription',
        html: message
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

router.get('/verify/:hash', (req, res, next) => {

  Sub.findOne({
    where: {
      verifyHash: req.params.hash
    }
  })
    .then(sub => {
      if(!sub) {
        res.send('Email not verified.')
      }
      else {
        sub.update({ subStatus: 'verified' })
        res.redirect(`http://${ req.get('host') }/verify`)
      }
      
    })
    .catch(error => next(error))
});

router.get('/unsub/:hash', (req, res, next) => {

  Sub.findOne({
    where: {
      verifyHash: req.params.hash
    }
  })
    .then(sub => {
      if(!sub) {
        res.send('Email does not exist.')
      }
      else {
        sub.update({ subStatus: 'unsubscribed' })
        res.send('email is gone.')
      }
    })

})


module.exports = router;
