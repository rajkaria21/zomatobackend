var express =require('express');
var app = express.Router();

cart = require('../controller/models/addtocart');
cartdetails = require('./models/getcartdetails');

// ========== Add to Cart ===========

    app.post('/addtocart',(req,res)=>
    {
        cart.addtoCart(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error': true, 'message': 'Error Adding Order !' });
            }
            else
            {
                res.json({ 'success': true, 'message': ' Done!' });
            }
        });
    });
    
// ========== Cart Details ===========

    app.post('/cartdetails',(req,res)=>
    {
        cartdetails.getDetails(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error': true, 'message': 'Error Fetching Cart Details !' });
            }
            else
            {
                res.json({ 'success': true, 'message': 'Done !' });
            }
        });
    });


module.exports = app;