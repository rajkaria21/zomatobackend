var con = require('../../connection');
var login =function(){ }

login.prototype.getUser = (req,res)=>
{    
    var sqlquery = 'select * from user where email = "' + req.body.email + '"';
     con.query(sqlquery,(err,result)=>
     {
         if(err)
         {
             res.send('Error');
         }
         else
         {
             if(result.length > 0)
             {
                if(req.body.password === result[0].password)
                {
                    res.json({ 'success': true, 'message': 'User Logged succesfully' });
                }
                else
                {
                    res.json({ 'error': true, 'message': 'Incoorect password or Email' });
                }
             }
             else
             {
                res.json({ 'error': true, 'message': 'Email does not exits' });
             }
         }

     });
}

module.exports = new login();
