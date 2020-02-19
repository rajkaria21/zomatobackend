var express = require('express');
var app = express.Router();
app.use('/users',require('./user'));

module.exports = app;
