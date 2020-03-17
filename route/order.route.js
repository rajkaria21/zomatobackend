const express = require('express');
const app = express.Router();

const addtoorderlistcontrol = require('../controller/order/addtoorderlist.controller');
const getorderdetailscontrol = require('../controller/order/getorderdetails.controller');

const ordervalidatemiddleware = require('../middleware/ordervalidation');

app.post('/orderlist/addtoorderlist',ordervalidatemiddleware.ordervalidation,addtoorderlistcontrol.addtoorderlist);
app.get('/orderlist/getorderdetails',getorderdetailscontrol.getorderdetails);

module.exports = app; 