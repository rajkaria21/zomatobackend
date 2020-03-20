const con = require('../../config/connection');
const nodemailer = require('nodemailer');
module.exports.forgotpassword = (req, res) => {

        // Generating OTP

    function generateOTP() {
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }

        // Inserting OTP in Database

        const email = req.body.email;
        con.query(`insert into otptable (otp,email) values(${OTP},'${email}')`);

        // Sending Mail of OTP

        var transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
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
                generateOTP(result.email);
                res.json({ 'success': true, 'message': 'Verified !! OTP sent in Mail' });
            } else {
                res.json({ 'error': true, 'message': 'Email does not exits' });
            }
        }
    });
}


