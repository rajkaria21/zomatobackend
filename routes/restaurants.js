var express = require('express');
var app = express.Router();

restaurent = require('../restaurents/controller/getrestaurents');
resdetails = require('../restaurents/controller/getresdetail');
searchres = require('../restaurents/controller/searchbyres');

//======== Get Restautrents ===========

app.get('/restaurents', (req, res) => {
    restaurent.getRestaurents(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents .. !' });
        }
        else {
            res.json(result);
        }
    });
});

// ========== Get Restaurents Detail ============

app.post('/restaurents/resdetail', (req, res) => {
    resdetails.getResdetails(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
        }
        else {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

// ========== Search Restaurents ============

app.post('/search', (req, res) => {
    searchres.searchbyRes(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurent !' });
        }
        else {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports = app;