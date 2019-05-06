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
  Sub.findOrCreate({
    where: {
      email: req.body.email
    }
  })
    .then(result => res.send(result))  // result is array where [0] = instance and [1] = wasCreated boolean
    .catch(error => next(error))
});

router.post('/verify', (req, res, next) => {

  const subscriberMail = req.body.email;
  const message = 'Thanks for subscribing!';
  
  const mailOptions = {
    from: FROM_EMAIL,
    to: subscriberMail,
    subject: 'listserve NYC Subscription',
    text: message
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

});




module.exports = router;
