var con = require('../../connection');
var addtocart = function(){}


addtocart.prototype.addtoCart = (req,res)=>
{
   var params =[req.body.f_id,req.body.r_id,req.body.qty,req.body.amount,req.body.total_amount,req.body.email];
   con.query(`select * from cart where email='${req.body.email}' and f_id=${req.body.f_id}`,function(err,result)
   {
       if(result.length == 0)
       {
        con.query('INSERT INTO cart (f_id,r_id,qty,amount,total_amount,email)VALUES(?,?,?,?,?,?)',params,(err,result)=>
        {
            if(err)
            {
                console.log(err);
                res.json({ 'error': true, 'message': 'Error Adding Order.. !' });
                
            }
            else
            {
                res.json('Order added to Cart');
            }
        });
       }
       else
       {
           con.query(`update cart set qty=${req.body.qty},total_amount=${req.body.total_amount} where email='${req.body.email}' and f_id=${req.body.f_id}`);
           res.json('Updated');
       }
   });
}

module.exports = new addtocart();
