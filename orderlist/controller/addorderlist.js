var con = require('../../config/connection');
var addtoorderlist = function () { }

var nodemailer = require('nodemailer');

addtoorderlist.prototype.addtoOrderList = (req, res) => {
    var datetime = new Date();
    var params = [req.body.r_id, req.body.f_id, req.body.email, req.body.qty, req.body.address, req.body.payment_type, datetime, req.body.total_amount];

    con.query('INSERT INTO order_list (r_id,f_id,email,qty,address,payment_type,date_time,total_amount)VALUES(?,?,?,?,?,?,?,?)', params, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Adding Order.. !' });
        }
        else {
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
                from: 'Zomato<raj.karia.sa@gmail.com>',
                to: req.body.email,
                subject: 'Order Confirmed',
                text: 'Your Order is Confirmed.Thank You For Ordering.Hope You have enjoyed the Food.'

            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json({ 'success': true, 'message': 'Done' });
                }
            });
            res.json({ 'success': true, 'message': 'Order added to Order List' });
        }
    });
}


module.exports = new addtoorderlist();

