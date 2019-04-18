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

// verify email connection
transporter.verify((error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Server is ready for email.')
  }
})


module.exports = transporter;
