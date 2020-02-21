var express = require('express');
var app = express.Router();

app.use('/users',require('./user'));
app.use('/res',require('./restaurants'));

app.use('/res',require('./food'));

app.use('/food',require('./search'));

app.use('/restaurents',require('./searchres'));
module.exports = app;
