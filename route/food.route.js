const express = require('express');
const app = express.Router();

const foodsearchcontrol = require('../controller/food/searchfood.controller');
const fooddetailcontrol = require('../controller/food/getfooddetail.controller');

app.post('/food/search', foodsearchcontrol.searchbyfood);
app.post('/food/fooddetails',fooddetailcontrol.getfooddetail);

module.exports = app;