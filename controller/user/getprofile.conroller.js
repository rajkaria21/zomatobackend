var con = require('../../config/connection');

module.exports.getprofile = (req, res) => {
    con.query(`select * from user where email='${req.query.email}'`, (err, result) => {
        if (result.length !== 0) {
            const token = req.headers['auth_token'];
            if (result[0].auth_token == token) {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Fetching User Details.. !' });
                }
                else {
                    res.json(result);
                }
            } else {
                res.json({ 'error': true, 'message': 'Wrong Auth Token' });
            }
        } else {
            res.json({ 'error': true, 'message': 'Invalid Email' });
        }
    });
}

