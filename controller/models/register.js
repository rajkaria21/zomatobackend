var con = require('../../connection');
var register =function(){ }
const err = new Error();
register.prototype.addUser = (req,res)=>{
    var params = [req.body.username, req.body.email, req.body.password, req.body.mob_no, req.body.address, req.body.city];
    var sqlquery='INSERT INTO user (username,email,password,mob_no,address,city) VALUES(?,?,?,?,?,?)';
    con.query(sqlquery,params,(err,result)=>{
        if(err){
            res.send(err.message);
            res.send('error in inserting');
        }else{
            res.send("success");
        }       
    });
}

module.exports = new register();