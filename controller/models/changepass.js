var con = require('../../connection');
var changepass =function(){ }

changepass.prototype.changePass = (req,res)=>
{
    con.query(`select password from user where password='${req.body.password}' and email ='${req.body.email}'`,(err,result)=>
    {
        if(result.length == 0 )
        {
            var sql = `update user set password ='${req.body.password}' where email='${req.body.email}'`;
            con.query(sql,(err,result)=>
            { 
                if(err)
                {
                    res.json({'error':true, 'message':'Error'});
                }
                else
                {
                    if(result.length > 0)
                    {
                        res.json({'error':true, 'message':'Error'});
                    }
                    else
                    {
                       res.json({ 'success': true, 'message': 'Password Changed' });
                    }
                   
                }
            });
        }
        else
        {
            res.json({'error':true, 'message':'Please Select Diff. Password'});
        }
    });

}


module.exports = new changepass();