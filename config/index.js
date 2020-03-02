var express = require('express');
var app = express.Router();

app.use('/users', require('../routes/user'));

app.use('/res', require('../routes/restaurants'));

app.use('/food', require('../routes/food'));

app.use('/order', require('../routes/cart'));

app.use('/orderlist', require('../routes/orderlist'));


module.exports = app;
