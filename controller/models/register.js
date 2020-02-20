var con = require('../../connection');
var register =function(){ }
// const myerr = new Error('Email Already Exists');
// middleware = require('../models/middleware');

register.prototype.addUser = (req,res,callback)=>{
    var params = [req.body.username, req.body.email, req.body.password, req.body.mob_no, req.body.address, req.body.city];
    var sqlquery='INSERT INTO user (username,email,password,mob_no,address,city) VALUES(?,?,?,?,?,?)';

    con.query(sqlquery,params,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json('Success');
        }
        
    });
}

module.exports = new register();