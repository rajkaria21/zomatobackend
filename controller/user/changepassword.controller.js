const con = require('../../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.changepassword = (req, res) => {

    con.query(`select * from user where password='${req.body.oldpassword}' and email ='${req.body.email}'`, (err, result) => {
        if (req.body.oldpassword == 0) {
            res.json({ 'error': true, 'message': 'Please Enter Old Password' });
        } else {
            con.query(`select * from user where email ='${req.body.email}'`, (err, result) => {
                if (result.length > 0) {
                    const dbpass = result[0].password;
                    const pass = bcrypt.compareSync(req.body.oldpassword, dbpass);
                    if (pass == true) {
                        var oldpass = req.body.oldpassword;
                        var newpass = req.body.newpassword;
                        if (newpass == oldpass) {
                            res.json({ 'error': true, 'message': 'Old and New Password are Same' });
                        } else {
                            if (newpass == '') {
                                res.json({ 'error': true, 'message': 'Please Enter New Password' });
                            } else {
                                const hashedPassword = bcrypt.hashSync(newpass, saltRounds);
                                const sql = `update user set password ='${hashedPassword}' where email='${req.body.email}'`;
                                con.query(sql, (err, result) => {
                                    if (err) {
                                        res.json({ 'error': true, 'message': 'Error' });
                                    } else {
                                        if (result.length > 0) {
                                            res.json({ 'error': true, 'message': 'Error' });
                                        } else {
                                            res.json({ 'success': true, 'message': 'Password Changed' });
                                        }
                                    }
                                });
                            }
                        }
                    } else {
                        res.json({ 'error': true, 'message': 'Wrong Old Password' });
                    }
                } else {
                    res.json({ 'error': true, 'message': 'Email does not exits' });
                }
            })
        }
    });
}
