const express = require('express');

module.exports.cartvalidation = (req, res, next) => {
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const qty =/^[0-9]*$/;
    const r_id=/^[0-9]*$/;
    const f_id =/^[0-9]*$/;
    const amount =/^[0-9]*$/;
    const total_amount =/^[0-9]*$/;

    if (!email.test(req.body.email)) {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }
    if (!qty.test(req.body.qty) || (req.body.qty) > 10) {
        return res.json({ 'error': true, 'message': 'Invalid Quantity' });
    }
    if (!r_id.test(req.body.r_id)) {
        return res.json({ 'error': true, 'message': 'Invalid r_id' });
    }
    if (!f_id.test(req.body.f_id)) {
        return res.json({ 'error': true, 'message': 'Invalid f_id' });
    }
    if (!amount.test(req.body.amount)) {
        return res.json({ 'error': true, 'message': 'Invalid Amount' });
    }
    if (!total_amount.test(req.body.total_amount)) {
        return res.json({ 'error': true, 'message': 'Invalid Total Amount' });
    }
    next();
}
