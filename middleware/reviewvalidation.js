const express = require('express');


module.exports.reviewvalidation = (req, res, next) => {
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const comment = /^[a-zA-Z_ ]*$/;
    const photo = /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/;

    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!comment.test(req.body.comment) || (req.body.comment).length < 3) {
        return res.json({ 'error': true, 'message': 'Invalid Comment' });
    }
    if (!photo.test(req.file.path)) {
        return res.json({ 'error': true, 'message': 'Invalid Photo' });
    }
} 