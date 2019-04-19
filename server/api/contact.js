const express = require('express');
const router = express.Router();

const transporter = require('../utils/email');

const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL; 

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `
    name: ${ name }
    email: ${ email }
    message: ${ message }
  `;

  const mailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: 'website contact',
    text: content
  }

  transporter.sendMail(mailOptions, (error, data) => {

    if(error) {
      // res.json({
      //   msg: 'fail'
      // })
      console.log(error)
    }
    else {
      res.json({
        msg: 'success'
      })
    }

  })

});


module.exports = router;
