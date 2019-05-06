// import module
const nodemailer = require('nodemailer');

const GMAIL_UNAME = process.env.GMAIL_UNAME;
const GMAIL_PWD = process.env.GMAIL_PWD; 

// transporter with auth options
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_UNAME,
    pass: GMAIL_PWD
  }
})

// verify email connection
transporter.verify(error => {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Server is ready for email.')
  }
})


module.exports = transporter;
