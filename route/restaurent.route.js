const express = require('express');
const app = express.Router();

const getrestaurentcontrol = require('../controller/restaurent/getrestaurent.controller');
const getrestaurentdetailcontrol = require('../controller/restaurent/getrestaurentdetail.controller');
const searchrestaurentcontrol = require('../controller/restaurent/searchrestaurent.controller');
const addratingcontrol = require('../controller/restaurent/addrating.controller');
const viewaverageratingcontrol = require('../controller/restaurent/viewaveragerating.controller');
const getreviewcontrol = require('../controller/restaurent/getreviews.controller');
const reviewvalidate = require('../middleware/reviewvalidation');
const addreviewcontrol = require('../controller/restaurent/addreview.controller');

app.get('/res/getreviews', getreviewcontrol.getreview);
app.get('/res/restaurents', getrestaurentcontrol.getrestaurents);
app.get('/res/restaurentdetail', getrestaurentdetailcontrol.getrestaurentdetails);
app.get('/res/search', searchrestaurentcontrol.searchbyrestaurent);
app.post('/res/addrating', addratingcontrol.addrating);
app.get('/res/viewrating', viewaverageratingcontrol.viewaveragerating);
app.post('/res/addreview',addreviewcontrol.addreview)



module.exports = app;
