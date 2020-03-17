var con = require('../../config/connection');
var nodemailer = require('nodemailer');

module.exports.addtoorderlist = (req, res) => {
    const datetime = new Date();
    const status = 'In progress';
    const params = [req.body.r_id, req.body.f_id, req.body.email, req.body.qty, req.body.address, req.body.payment_type, datetime, req.body.total_amount, status];
    const token = req.headers['auth_token'];
    con.query(`select * from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
        if (result.length != 0) {
            con.query('INSERT INTO order_list (r_id,f_id,email,qty,address,payment_type,date_time,total_amount,status)VALUES(?,?,?,?,?,?,?,?,?)', params, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Adding Order.. !' });
                } else {
                    con.query(`select food_name,food_img from order_list JOIN food on order_list.f_id = food.f_id where order_list.email='${req.body.email}'`, (err, result) => {
                        
                        const food_name = result[0].food_name;
                        setTimeout(function () {
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
                                text: 'Your Order is Confirmed. \n Thank You For Ordering. \n Hope You have enjoyed the ' + food_name + '.'

                            }

                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    res.send(error);
                                }
                                else {
                                    res.json({ 'success': true, 'message': 'Done' });
                                }
                            });
                            con.query(`UPDATE order_list SET status="Delivered" WHERE email='${req.body.email}'`, function (error, result) { });
                        }, 20000);
                    })
                    res.json({ 'success': true, 'message': 'Order added to Order List' });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    })

}


