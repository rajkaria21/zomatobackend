const express = require('express');

module.exports.ratingvalidate = (req, res, next) => {
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const rating =/^[0-5]*$/;
    const r_id=/^[0-9]*$/;

    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!rating.test(req.body.rating)) {
        return res.json({ 'error': true, 'message': 'Invalid Rating' });
    }
    if (!r_id.test(req.body.r_id)) {
        return res.json({ 'error': true, 'message': 'Invalid r_id' });
    }
    next();
}
