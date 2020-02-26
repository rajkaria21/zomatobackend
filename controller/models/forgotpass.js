var con = require('../../connection');
var forgotpass =function(){ }

forgotpass.prototype.forgotUser = (req,res)=>{
    var sql = `select * from user where email ='${req.body.email}'`;
    con.query(sql,(err,result)=>
    {
        if(err)
        {
            res.send('Error');
        }else
        {
            if(result.length > 0)
            {
                res.json({'success':true, 'message':'Verified'});
            }else
            {
               res.json({ 'error': true, 'message': 'Email does not exits' });
            }
           
        }
    });
}




module.exports = new forgotpass();