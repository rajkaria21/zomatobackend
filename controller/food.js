var express =require('express');
var app = express.Router();

food = require('../controller/models/getfood');
// app.get('/restaurents/food',(req,res)=>{
//     food.getFood(req,res,(err,result)=>{
//         if(err){
//             console.log(err);
//             res.json({ 'error': true, 'message': 'Error Fetching food .. !' });
//         }else{
//             res.json(result);
//         }
//     });
// });


app.post('/restaurents/food',(req,res)=>{
    food.getFood(req,res,(err,result)=>{
        if(err){
            // console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Food !' });
        }else{
            res.json(result);
            // console.log(result);
            res.json({ 'success': true, 'message': ' Done!' });

        }
    })
})
module.exports = app;