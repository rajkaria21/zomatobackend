var con = require('../../config/connection');

module.exports.editprofile = (req, res) => {

    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length != 0) {
            const sql = `update user set username ='${req.body.username}',mob_no =${req.body.mob_no},
            address ='${req.body.address}',city ='${req.body.city}'  where email='${req.body.email}'`;
            con.query(sql, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error' });
                }
                else {
                    if (result.length > 0) {
                        res.json({ 'error': true, 'message': 'Error' });
                    } else {
                        res.json({ 'success': true, 'message': 'Profile Updated' });
                    }
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}
