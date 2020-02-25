var con = require('../../connection');
var getcartdetails = function(){}


getcartdetails.prototype.getDetails = (req,res)=>
{

    con.query(`select  * from cart where f_id=${req.body.f_id} and r_id=${req.body.r_id} and email='${req.body.email}'`,function(err,result)
    {
        if(result.length == 0)
        {
            res.json('No items in cart');
        }
        else
        {
            var sql = `select * from cart where f_id=${req.body.f_id} and r_id=${req.body.r_id} and email='${req.body.email}'`;
            con.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err)
                    res.json({ 'error': true, 'message': 'Error Fetching Cart Details.. !' });
                }
                else
                {
                    console.log(result);
                    res.json(result);
                }
            });
        }
    })
    
}

module.exports = new getcartdetails();


// CAST(MyVarcharCol AS INT)    