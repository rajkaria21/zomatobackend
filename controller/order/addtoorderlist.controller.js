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
                    var splitFood;
                    var food = [];
                    con.query(`select f_id,qty from order_list WHERE email='${req.body.email}'`, (err, result) => {
                        for (i = 0; i < result.length; i++) {
                            const food_name = result[i].f_id;
                            splitFood = food_name.split(',')
                        }
                        // for (i = 0; i < result.length; i++) {
                        //     const quan = result[i].qty;
                        //     splitqty = quan.split(',');
                        // }
                        // console.log(splitqty)
                        for (i = 0; i < splitFood.length; i++) {
                            con.query(`select food_name from food where f_id='${splitFood[i]}'`, (err, foodresult) => {
                                food.push(foodresult[0].food_name);
                            })
                        }
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
                                text: 'Your Order is Confirmed. \nThank You For Ordering. \nHope You have enjoyed the ' + food + '.'

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
                        }, 2000);
                    })
                    res.json({ 'success': true, 'message': 'Order added to Order List' });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    })

}


