// import module
const nodemailer = require('nodemailer');

// transporter with auth options
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'listservenyc.noreply@gmail.com',
    pass: 'N0r3plii'
  }
})

// mail options
// const mailOptions = {
//   from: 'listservenyc.noreply@gmail.com',
//   to: 'andrewhheller@gmail.com',
//   subject: 'website contact',
//   text: 'hello world!'
// };

// transporter.sendMail(mailOptions, function (err, info) {

//   if(err) {
//     console.log(err);
//   }

//   else {
//     console.log(info);
//   }

// });

// verify email connection
transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Server is ready for email.')
  }
})


module.exports = transporter;
