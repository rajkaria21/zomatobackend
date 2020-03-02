var express = require('express');
var app = express.Router();
order = require('../orderlist/controller/addorderlist');

app.post('/addtoorderlist', (req, res) => {
    order.addtoOrderList(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Adding Order !' });
        }
        else {
            res.json({ 'success': true, 'message': ' Done!' });
        }
    });
});


module.exports = app;
