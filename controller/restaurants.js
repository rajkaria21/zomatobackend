var express = require('express');
var app = express.Router();

restaurent = require('../controller/models/getrestaurents');

app.get('/restaurents',(req,res)=>{
    restaurent.getRestaurents(req,res,(err,result)=>{
        if(err){
            console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents .. !' });
        }else{
            res.send(result);
        }
    });
});

module.exports =  app;