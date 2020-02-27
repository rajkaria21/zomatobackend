var express =require('express');
var app = express.Router();

searchres = require('../controller/searchbyres');


app.post('/search',(req,res)=>
{
    searchres.searchbyRes(req,res,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurent !' });
        }
        else
        {
            res.json(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    });
});

module.exports = app;