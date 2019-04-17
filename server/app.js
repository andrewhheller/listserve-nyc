const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const subRoute = require('./api/sub');

app.use(express.static('dist'));
// app.use(express.static('node_modules'))
app.use(bodyParser.json());
app.use('/api/sub', subRoute);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});



module.exports = app;
