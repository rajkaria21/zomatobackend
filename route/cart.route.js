const express = require('express');
const app = express.Router();

const addtocartcontrol = require('../controller/cart/addtocart.controller');
const getcartdetailscontrol = require('../controller/cart/getcartdetails.controller');
const deletecartdetailscontrol = require('../controller/cart/delcartdetails.controller');

app.post('/order/addtocart', addtocartcontrol.addtocart);
app.post('/order/cartdetails', getcartdetailscontrol.getcartdetails);
app.post('/order/delcartdetails',deletecartdetailscontrol.delcartdetails);

module.exports = app;