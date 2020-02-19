var express = require('express');
var app = express.Router();

app.use('/users',require('./user'));
app.use('/res',require('./restaurants'));

module.exports = app;
