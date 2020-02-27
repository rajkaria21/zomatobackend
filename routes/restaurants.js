var express = require('express');
var app = express.Router();

restaurent = require('../controller/getrestaurents');
resdetails = require('../controller/getresdetail');

//======== Get Restautrents ===========

app.get('/restaurents',(req,res)=>
{
    restaurent.getRestaurents(req,res,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents .. !' });
        }
        else
        {
            res.json(result);
        }
    });
});

// ========== Get Restaurents Detail ============

app.post('/restaurents/resdetail',(req,res)=>
{
    resdetails.getResdetails(req,res,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
        }
        else
        {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports =  app;