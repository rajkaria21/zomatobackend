const express = require('express');
const app = express.Router();

const foodsearchcontrol = require('../controller/food/searchfood.controller');
const fooddetailcontrol = require('../controller/food/getfooddetail.controller');

app.get('/food/search', foodsearchcontrol.searchbyfood);
app.get('/food/fooddetails',fooddetailcontrol.getfooddetail);

module.exports = app;