const express = require('express');
const app = express.Router();

const getrestaurentcontrol = require('../controller/restaurent/getrestaurent.controller');

app.get('/res/restaurents',getrestaurentcontrol.getrestaurents);

module.exports = app;