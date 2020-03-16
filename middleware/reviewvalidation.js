const express = require('express');


module.exports.reviewvalidation = (req, res, next) => {

    // const r_id = /^\\d+$/;
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const comment = /^[a-zA-Z_ ]*$/;

    // if (!r_id.test(req.body.r_id)) {
    //     return res.json({ 'error': true, 'message': 'Invalid r_id' });
    // }
    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!comment.test(req.body.comment) || (req.body.comment).length < 3) {
        return res.json({ 'error': true, 'message': 'Invalid Comment' });
    }
   next();
} 