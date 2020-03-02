var con = require('../../config/connection');
var verifyotp = function () { }

verifyotp.prototype.verifyOTP = (req, res) => {
    let otp = Number(req.body.otp);
    con.query(`select * from otptable where otp=${otp} and email ='${req.body.email}'`, (err, result) => {
        if (result.length > 0) {
            res.json({ 'success': true, 'message': 'OTP Verified' });
            con.query(`delete from otptable where otp=${otp} and email ='${req.body.email}'`);
        }
        else {
            res.json({ 'error': true, 'message': 'Wrong OTP' });
        }
    })
}

module.exports = new verifyotp();
