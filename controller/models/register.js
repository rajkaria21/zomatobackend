var con = require('../../connection');
var register =function(){ }
const err = new Error('Email Already Exists');

register.prototype.addUser = (req,res,callback)=>{
    var params = [req.body.username, req.body.email, req.body.password, req.body.mob_no, req.body.address, req.body.city];
    var sqlquery='INSERT INTO user (username,email,password,mob_no,address,city) VALUES(?,?,?,?,?,?)';

    con.query(sqlquery,params,(err,result)=>{
        if(err){
            res.json({ 'error': true, 'message': 'Email alresdy exists !' });
            callback(true,null);
        }else{
            res.send('Success');
            callback(null,true);
        }       
    });
}

module.exports = new register();