const con = require('../../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.resetpass = (req, res) => {

    con.query(`select * from user where password='${req.body.password}' and email ='${req.body.email}'`, (err, result) => {
        if (req.body.password == 0) {
            res.json({ 'error': true, 'message': 'Please Enter Password' });
        } else {
            con.query(`select * from user where email ='${req.body.email}'`, (err, result) => {
                if (result.length > 0) {
                    // con.query(`select password from user where email ='${req.body.email}'`, (err, result) => {
                        const dbpass = result[0].password;
                        const pass = bcrypt.compareSync(req.body.password, dbpass);
                        if (pass == true) {
                            res.json({ 'error': true, 'message': 'Please Select Diff. Password' });
                        } else {
                            const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
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
                    // });
                } else {
                    res.json({ 'error': true, 'message': 'Email does not exits' });
                }
            })
        }
    });
}
