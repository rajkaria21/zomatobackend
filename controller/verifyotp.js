var con = require('../config/connection');
var verifyotp =function(){ }

verifyotp.prototype.verifyOTP =(req,res)=>
{
    con.query(`select * from otptable where otp=${req.body.otp} and email ='${req.body.email}'`,(err,result)=>
    {
        if(result.length >0)
        {
                res.json({ 'success':true,'message':'OTP Verified'});
        }
        else
        {
                res.json({ 'error':true,'message':'Wrong OTP'});
        }
    })
}

module.exports = new verifyotp();
