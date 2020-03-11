const con = require('../../config/connection');
const bcrypt = require('bcrypt');
module.exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    con.query(`select * from user where email = '${email}'`, (err, result) => {
        if (result.length > 0) {
            const dbpass = result[0].password;
            const pass = bcrypt.compareSync(password, dbpass);
            if (pass == true) {
                con.query(`select auth_token from user where email='${email}'`, (err, result) => {
                    if (err) {
                        res.json({ 'error': true, 'message': 'Error' });
                    } else {
                        const token_send = result[0].auth_token;
                        res.json({ 'success': true, 'message': 'User Logged succesfully', 'auth_token': token_send })
                    }
                });
            } else {
                res.json({ 'error': true, 'message': 'Password not match' });
            }
        } else {
            res.json({ 'error': true, 'message': 'Email does not exits' });
        }

    });
}

