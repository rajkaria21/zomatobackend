var con = require('../../config/connection');

module.exports.viewaveragerating = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`SELECT (SUM(rating) / COUNT(rating)) as rating FROM rating WHERE r_id = '${req.query.r_id}'`, (err, result) => {
                if (result.length == null) {
                    res.json({ 'error': true, 'message': 'No Ratings' });
                } else {
                    con.query(`SELECT (SUM(rating) / COUNT(rating)) as rating FROM rating WHERE r_id = '${req.query.r_id}'`, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching Ratings' });
                        } else {
                            res.json(result);
                        }
                    });
                }
            })
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}

