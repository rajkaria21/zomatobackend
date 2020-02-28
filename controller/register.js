var con = require('../config/connection');
var register =function(){ }
var emailExistence = require('email-existence')


register.prototype.addUser = (req,res,callback)=>
{

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var mob_no = req.body.mob_no;
    var address = req.body.address;
    var city = req.body.city;
    
    emailExistence.check(email, function(error, response)
    {
        if(response == true)
        {
            con.query(`select * from user where email = '${req.body.email}'`,function(error,result)
            {
                if(result.length==0)
                {
                    con.query('INSERT INTO user (username,email,password,mob_no,address,city) VALUES(?,?,?,?,?,?)',[username,email,password,mob_no,address,city],
                    (err,result)=>
                    {
                        if(err)
                        {
                            res.json(err);
                        }
                        else
                        {
                            res.json({ 'success': true, 'message': 'Success!' });
                            
                        }
                    });
                }
                else
                {
                    res.json({ 'error': true, 'message': 'Email Alreay Exists' });
                }
            });
        }
        else
        {
            res.json({ 'error': true, 'message': 'Invalid Email' });
        }
    });
    
}


module.exports = new register();