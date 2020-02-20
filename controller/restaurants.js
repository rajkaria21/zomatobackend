var express = require('express');
var app = express.Router();

restaurent = require('../controller/models/getrestaurents');
resdetails = require('../controller/models/getresdetail');

app.get('/restaurents',(req,res)=>{
    restaurent.getRestaurents(req,res,(err,result)=>{
        if(err){
            console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents .. !' });
        }else{
            res.json(result);
        }
    });
});

app.post('/restaurents/resdetail',(req,res)=>{
    resdetails.getResdetails(req,res,(err,result)=>{
        if(err){
            // console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
        }else{
            res.json(result);
            // console.log(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    })
})

module.exports =  app;