var con = require('../../config/connection');

module.exports.getreview = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`select * from review where r_id='${req.body.r_id}'`, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Fetching Review' });
                } else {
                    res.json(result);
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}

