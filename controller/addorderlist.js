var con = require('../config/connection');
var addtoorderlist = function(){}

var nodemailer = require('nodemailer');

addtoorderlist.prototype.addtoOrderList = (req,res)=>
{
    
   var params =[req.body.email,req.body.r_id,req.body.f_id,req.body.total_amount,req.body.qty,req.body.address,req.body.payment_type];

   con.query(`select * from order_list where email='${req.body.email}' and r_id=${req.body.r_id} and 
   f_id=${req.body.f_id} and total_amount=${req.body.total_amount} and qty=${req.body.qty} and 
   address='${req.body.address}' and payment_type='${req.body.payment_type}'`,
   function(err,result)
   {
       if(result.length == 0)
       {
        con.query('INSERT INTO order_list (email,r_id,f_id,total_amount,qty,address,payment_type)VALUES(?,?,?,?,?,?,?)',params,(err,result)=>
        {
            if(err)
            {
                res.json({ 'error': true, 'message': 'Error Adding Order.. !' });
                
            }
            else
            {
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

            transporter.sendMail(mailOptions, function(error, info){
            if (error) 
            {
                res.send(error);
            } 
            else 
            {
                res.json({'success':true, 'message':'Done'});
            }
            });
                res.json({ 'success': true, 'message': 'Order added to Order List' });
            }
        });
       }
       else
       {
        res.json({ 'error': true, 'message': 'Order Already Added' });
    }
   });
}

module.exports = new addtoorderlist();

