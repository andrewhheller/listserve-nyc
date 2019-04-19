const dotenv = require('dotenv');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

// API routes
const subRoute = require('./api/sub');
const contactRoute = require('./api/contact');

// ### MIDDLEWARE ###

dotenv.config();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// APIR routes
app.use('/api/sub', subRoute);
app.use('/api/contact', contactRoute);

// serve main page
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});



module.exports = app;
