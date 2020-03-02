var con = require('../../config/connection');
var forgotpass = function () { }
var nodemailer = require('nodemailer');


forgotpass.prototype.forgotUser = (req, res) => {

    // Generating OTP

    function generateOTP(email) {
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }

        // Inserting OTP in Database
       
        con.query(`insert into otptable (otp,email) values(${OTP},'${email}')`);

        // Sending Mail of OTP

        var transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: 'raj.karia.sa@gmail.com',
                    pass: 'raj@123456'
                }
            });

        var mailOptions =
        {
            from: 'Zomato <raj.karia.sa@gmail.com>',
            to: req.body.email,
            subject: 'Reset Password',
            text: 'Your OTP for Resetting Password: ' + OTP + ' .'

        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(error);
            }
            else {
                res.json({ 'success': true, 'message': 'Verified !! OTP sent in Mail' });
            }
        });
    }

    // Checking Email is There or Not in Database

    var sql = `select * from user where email ='${req.body.email}'`;
    con.query(sql, (err, result) => {
        if (err) {
            res.send('Error');
        } else {
            if (result.length > 0) {
                generateOTP(result[0].email);
                res.json({ 'success': true, 'message': 'Verified !! OTP sent in Mail' });
            }
            else {
                res.json({ 'error': true, 'message': 'Email does not exits' });
            }

        }
    });
}



module.exports = new forgotpass();