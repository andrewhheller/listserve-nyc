const express = require('express');
const router = express.Router();

const transporter = require('../utils/email');



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
    from: 'listservenyc.noreply@gmail.com',
    to: 'andrewhheller@gmail.com',
    subject: 'website contact',
    text: content
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
