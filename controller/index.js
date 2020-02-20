var express = require('express');
var app = express.Router();

app.use('/users',require('./user'));
app.use('/res',require('./restaurants'));
app.use('/res',require('./food'));
module.exports = app;
