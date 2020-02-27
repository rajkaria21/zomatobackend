var express =require('express');
var app = express.Router();

searchfood = require('../controller/searchbyfood');

app.post('/search',(req,res)=>
{
    searchfood.searchbyFood(req,res,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Searching Food !' });
        }
        else
        {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports = app;