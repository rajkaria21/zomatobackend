const express = require('express');

module.exports.validation = (req, res, next) => {
    const username = /^[a-zA-Z_ ]*$/;
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const password = /^[a-zA-Z0-9]+$/;
    const mob_no = /^([6-9]{1})([0-9]{9})$/;
    const address = /^[a-zA-Z0-9\s,'-]*$/;
    const city = /^[a-zA-Z]+$/;
    
    if (!username.test(req.body.username) || (req.body.username).length < 3) {
        return res.json({ 'error': true, 'message': 'Invalid Username' });
    }
    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!password.test(req.body.password) || (req.body.password).length < 6) {
        return res.json({ 'error': true, 'message': 'Invalid Password' });
    }
    if (!mob_no.test(req.body.mob_no)) {
        return res.json({ 'error': true, 'message': 'Invalid Mobile Number' });
    }
    if (!address.test(req.body.address)) {
        return res.json({ 'error': true, 'message': 'Invalid Address' });
    }
    if (!city.test(req.body.city)) {
        return res.json({ 'error': true, 'message': 'Invalid City' });
    }
    next();
}

