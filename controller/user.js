var express = require('express');
var app = express.Router();
var nodemailer = require('nodemailer');

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

// ========== Edit Profile Details ===========

    app.post('/editprofile',(req,res)=>{
        editprofile.editProfile(req,res,(err,result)=>{
            if(err){
                res.json({ 'error':true,'message':'Error Editing Details'})
            }else{
                res.json({ 'success':true,'message':'Success'});
            }
        });
    });

//=========== Forgot pass via email link  FOR TRIAL ========

    app.post('/forgotpasss',(req,res)=>
    {
        // email = req.body.email;

        var transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
            user: 'raj.karia.sa@gmail.com',
            pass: 'raj@123456'
        }
    });

    var mailOptions = 
    {
    from: 'raj.karia.sa@gmail.com',
    to: '',
    subject: 'Mail Testing',
    text: 'Hello How r u ?'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) 
    {
        console.log(error);
    } 
    else 
    {
        console.log('Email sent: ' + info.response);
        res.json('Email sent: ' + info.response)
    }
    });
    });

    

module.exports = app;