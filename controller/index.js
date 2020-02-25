var express = require('express');
var app = express.Router();

app.use('/users',require('./user'));

app.use('/res',require('./restaurants'));

app.use('/food',require('./food'));

app.use('/food',require('./search'));

app.use('/restaurents',require('./searchres'));

app.use('/order',require('./cart'));

app.use('/orderlist',require('./orderlist'));


module.exports = app;
