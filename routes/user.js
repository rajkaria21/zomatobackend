var express = require('express');
var app = express.Router();

register = require('../user/controller/register');
login = require('../user/controller/login');
forgot = require('../user/controller/forgotpass');
profile = require('../user/controller/getprofile');
change = require('../user/controller/changepass');
editprofile = require('../user/controller/editprofile');
verifyotp = require('../user/controller/verifyotp');

// ========== Regiter User ===========

app.post('/register', (req, res) => {
    register.addUser(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error adding user .. !' });
        }
        else {
            res.json({ 'success': true, 'message': 'User added succesfully' });
        }
    });
});


// ========== Login User ===========


app.post('/login', (req, res) => {
    login.getUser(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'error' });
        }
        else {
            res.json({ 'success': true, 'message': 'Login success' });
            console.log(result)
        }
    });
});

// ==========  Forgot Password ===========

app.post('/forgotpass', (req, res) => {
    forgot.forgotUser(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error' });
        }
        else {
            res.json({ 'success': true, 'message': 'Success' });
        }
    });
});

// ========== Change Password ===========

app.post('/changepass', (req, res) => {
    change.changePass(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error' })
        }
        else {
            res.json({ 'success': true, 'message': 'Success' });
        }
    });
});


// ========== Verify OTP =============

app.post('/verifyotp', (req, res) => {
    verifyotp.verifyOTP(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error' })
        }
        else {
            res.json({ 'success': true, 'message': 'Success' });
        }
    });
});

// ========== Get profile Details ===========

app.post('/profiledetails', (req, res) => {
    profile.getProfile(req, res, (err, result) => {
        if (eer) {
            res.json({ 'error': true, 'message': 'Error Fetching Details' })
        }
        else {
            res.json({ 'success': true, 'message': 'Success' });
        }
    });
});

// ========== Edit Profile Details ===========

app.post('/editprofile', (req, res) => {
    editprofile.editProfile(req, res, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Editing Details' })
        } else {
            res.json({ 'success': true, 'message': 'Success' });
        }
    });
});


module.exports = app;