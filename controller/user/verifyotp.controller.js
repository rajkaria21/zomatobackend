var con = require('../../config/connection');

module.exports.verifyotp= (req, res) => {
    let otp = Number(req.body.otp);
    const email = req.body.email;
    
    con.query(`select * from otptable where otp=${otp} and email ='${email}'`, (err, result) => {
        
        if (result.length > 0) {
            res.json({ 'success': true, 'message': 'OTP Verified' });
            con.query(`delete from otptable where otp=${otp} and email ='${req.body.email}'`);
        }
        else {
            res.json({ 'error': true, 'message': 'Wrong OTP' });
        }
    })
}
