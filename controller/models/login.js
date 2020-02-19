var con = require('../../connection');
var login =function(){ }

login.prototype.getUser = (req,res)=>{
    // var params = [req.body.username,req.body.password];
    var sqlquery = 'select * from user where email = "' + req.body.email + '"';
     con.query(sqlquery,(err,result)=>{
         if(err){
             res.send('Error');
         }else{
            if(req.body.password === result[0].password){
                res.send('Login successfully');
            }else{
                res.send('Email or Password is incorrect');
            }
         }
     });
}
module.exports = new login();
