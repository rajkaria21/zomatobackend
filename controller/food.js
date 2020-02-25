var express =require('express');
var app = express.Router();

food = require('../controller/models/getfood');

app.post('/fooddetails',(req,res)=>
{
    food.getFood(req,res,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Food !' });
        }
        else
        {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports = app;