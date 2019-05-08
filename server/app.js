const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

// API routes
const subRoute = require('./api/sub');
const contactRoute = require('./api/contact');

// pages
const index = path.join(__dirname, '../dist/index.html');
const errorPage = path.join(__dirname, '../dist/404.html');
const verify = path.join(__dirname, '../dist/verify.html');

// ### MIDDLEWARE ###

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// API routes
app.use('/api/sub', subRoute);
app.use('/api/contact', contactRoute);

// serve main page
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, index))
});

app.get('/verify', (req, res, next) => {
  res.sendFile(path.join(__dirname, verify))
})

// error handling
app.use((req, res, next) => {
  res.status(404).sendFile(errorPage)
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send('<h1>An error has occurred</h1>');
});


module.exports = app;
