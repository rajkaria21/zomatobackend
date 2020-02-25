var express = require('express');
var app = express.Router();

register = require('./models/register');
login= require('./models/login');
login1 = require('./models/login1');
forgot = require('./models/forgotpass');
profile = require('./models/getprofile'); 
change = require('./models/changepass');
editprofile = require('./models/editprofile');

// ========== Regiter User ===========

    app.post('/register',(req,res)=>
    {
        register.addUser(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error': true, 'message': 'Error adding user .. !' });
            }
            else
            {
                res.json({ 'success': true, 'message': 'User added succesfully' });
            }
        });
    });


// ========== Login User ===========


    app.post('/login',(req,res)=>
    {
        login.getUser(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error': true, 'message': 'error' });
            }
            else
            {  
                res.json({ 'success': true, 'message': 'Login success' });
                console.log(result)
            }
        });
    });

// ==========  Forgot Password ===========

    app.post('/forgotpass',(req,res)=>
    {
        forgot.forgotUser(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error':true,'message':'Error'});
            }
            else{
                res.json({ 'success':true,'message':'Success'});
            }
        });
});

// ========== Change Password ===========

    app.post('/changepass',(req,res)=>
    {
        change.changePass(req,res,(err,result)=>
        {
            if(err)
            {
                res.json({'error':true,'message':'Error'})
            }
            else
            {
                res.json({ 'success':true,'message':'Success'});
            }
        });
    });

// ========== Get profile Details ===========

    app.post('/profiledetails',(req,res)=>
    {
        profile.getProfile(req,res,(err,result)=>
        {
            if(eer)
            {
                res.json({ 'error':true,'message':'Error Fetching Details'})
            }
            else
            {
                res.json({ 'success':true,'message':'Success'});
            }
        });
    });

// ========== Regiter User ===========

    app.post('/editprofile',(req,res)=>{
        editprofile.editProfile(req,res,(err,result)=>{
            if(err){
                res.json({ 'error':true,'message':'Error Editing Details'})
            }else{
                res.json({ 'success':true,'message':'Success'});
            }
        });
    });

// ========== Regiter User ===========

//     app.post('/logins',(req,res)=>
//     {
//         login1.getUsers(req,res,(err,result)=>
//         {
//             if(err)
//             {
//                 res.json({ 'error': true, 'message': 'error' });
//             }
//             else
//             {  
//                 res.json({ 'success': true, 'message': 'Login success' });
//             }
//         });
// });


module.exports = app;