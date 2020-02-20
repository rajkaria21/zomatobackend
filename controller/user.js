var express = require('express');
var app = express.Router();
register = require('./models/register');
login= require('./models/login');

    
    app.post('/register',(req,res)=>{
        register.addUser(req,res,(err,result)=>{
            if(err){
                res.json({ 'error': true, 'message': 'Error adding user .. !' });
            }else{
                res.json({ 'success': true, 'message': 'User added succesfully' });
            }
        });
});




    app.post('/login',(req,res)=>{
        login.getUser(req,res,(err,result)=>{
            if(err){
                res.json({ 'error': true, 'message': 'error' });
            }else{  
                res.json({ 'success': true, 'message': 'login success' });
            }
        });
});

module.exports = app;