var express =require('express');
var app = express.Router();

searchres = require('../controller/models/searchbyres');


app.post('/search',(req,res)=>{
    searchres.searchbyRes(req,res,(err,result)=>{
        if(err){
            // console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Restaurent !' });
        }else{
            res.json(result);
            // console.log(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    })
})

module.exports = app;