var con = require('../../config/connection');

module.exports.getprofile = (req, res) => {
    con.query(`select * from user where email='${req.body.email}'`, (err, result) => {
        if (result.length !== 0) {
            var sql = `select * from user where email='${req.body.email}'`;
            const token = req.headers['auth_token'];
            if (result[0].auth_token == token) {
                con.query(sql, (err, result) => {
                    if (err) {
                        res.json({ 'error': true, 'message': 'Error Fetching User Details.. !' });
                    }
                    else {
                        res.json(result);
                    }
                });
            } else {
                res.json({ 'error': true, 'message': 'Wrong Auth Token' });
            }
        } else {
            res.json({ 'error': true, 'message': 'Invalid Email' });
        }
    });
}

