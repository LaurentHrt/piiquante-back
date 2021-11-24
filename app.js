var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var dbConnection = require('./database/connection');
var authRouter = require('./routes/auth');
var saucesRouter = require('./routes/sauces');

var app = express();

// Connect to the database
dbConnection();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/sauces', saucesRouter);

module.exports = app;
