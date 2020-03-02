var express = require('express');
var app = express.Router();

food = require('../food/controller/getfood');
searchfood = require('../food/controller/searchbyfood');


//======== Get Food Details============

app.post('/fooddetails', (req, res) => {
    food.getFood(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Fetching Food !' });
        }
        else {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

// =========== Search Food ==============

app.post('/search', (req, res) => {
    searchfood.searchbyFood(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Searching Food !' });
        }
        else {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports = app;