const express = require('express');

module.exports.ordervalidation = (req, res, next) => {
    const email = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
    const qty = /^[0-9,]*$/;
    const r_id = /^[0-9]*$/;
    const f_id = /^[0-9,]*$/;
    const total_amount = /^[0-9]*$/;

    if (!email.test(req.body.email) || (req.body.email) == '') {
        return res.json({ 'error': true, 'message': 'Invalid Email' });
    }

    var check = false;
    var quantity = req.body.qty;
    var qtySplit = quantity.split(',')
    var Qty;
    for (i = 0; i < qtySplit.length; i++) {
        Qty = qtySplit[i];
        if (!qty.test(Qty) || (Qty) > 10 || (Qty) == '') {
            check = true
        }
    }
    if (check == true) {
        return res.json({ 'error': true, 'message': 'Invalid Quantity' });
    }

    if (!r_id.test(req.body.r_id) || (req.body.r_id) == '') {
        return res.json({ 'error': true, 'message': 'Invalid r_id' });
    }

    if (!f_id.test(req.body.f_id) || (req.body.f_id) == '') {
        return res.json({ 'error': true, 'message': 'Invalid f_id' });
    }

    if (!total_amount.test(req.body.total_amount) || (req.body.total_amount) == '') {
        return res.json({ 'error': true, 'message': 'Invalid Total Amount' });
    }

    next();
}
