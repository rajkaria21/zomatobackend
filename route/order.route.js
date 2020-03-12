const express = require('express');
const app = express.Router();
const addtoorderlistcontrol = require('../controller/order/addtoorderlist.controller');
const getorderdetailscontrol = require('../controller/order/getorderdetails.controller');

app.post('/orderlist/addtoorderlist',addtoorderlistcontrol.addtoorderlist);
app.get('/orderlist/getorderdetails',getorderdetailscontrol.getorderdetails);

module.exports = app;