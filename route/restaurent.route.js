const express = require('express');
const app = express.Router();

const getrestaurentcontrol = require('../controller/restaurent/getrestaurent.controller');
const getrestaurentdetailcontrol = require('../controller/restaurent/getrestaurentdetail.controller');
const searchrestaurentcontrol = require('../controller/restaurent/searchrestaurent.controller');
const addratingcontrol = require('../controller/restaurent/addrating.controller');
const addreviewcontrol = require('../controller/restaurent/addreview.controller');
const viewratingcontrol = require('../controller/restaurent/viewrating.controller');
const getreviewcontrol = require('../controller/restaurent/getreviews.controller');

const ratingvalidatemiddleware = require('../middleware/ratingvalidate');

const filterfoodcontrol = require('../controller/restaurent/filterfood');

app.get('/res/getreviews', getreviewcontrol.getreview);
app.get('/res/restaurents', getrestaurentcontrol.getrestaurents);
app.get('/res/restaurentdetail', getrestaurentdetailcontrol.getrestaurentdetails);
app.get('/res/search', searchrestaurentcontrol.searchbyrestaurent);
app.post('/res/addrating', ratingvalidatemiddleware.ratingvalidate,addratingcontrol.addrating);
app.get('/res/viewrating', viewratingcontrol.viewaveragerating);
app.post('/res/addreview',addreviewcontrol.addreview)
app.get('/filter/food',filterfoodcontrol.filterfood)


module.exports = app;
