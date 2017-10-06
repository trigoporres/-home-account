const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const layouts        = require("express-ejs-layouts");
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');

module.exports = (app) => {
  mongoose.connect(process.env.MONGODB_URI);

  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

};
