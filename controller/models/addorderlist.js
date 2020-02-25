var con = require('../../connection');
var addtoorderlist = function(){}


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
                console.log(err);
                res.json({ 'error': true, 'message': 'Error Adding Order.. !' });
                
            }
            else
            {
                res.json('Order added to Order List');
            }
        });
       }
       else
       {
        res.json('Order Alreay Added');
       }
   });
}

module.exports = new addtoorderlist();
