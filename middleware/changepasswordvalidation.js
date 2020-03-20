const express = require('express');

module.exports.changepassvalidate = (req, res, next) => {
 
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    
    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!password.test(req.body.oldpassword)) {
        return res.json({ 'error': true, 'message': 'Invalid Password' });
    }
    if (!password.test(req.body.newpassword)) {
        return res.json({ 'error': true, 'message': 'Invalid Password' });
    }
    next();
}

