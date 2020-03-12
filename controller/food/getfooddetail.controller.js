var con = require('../../config/connection');

module.exports.getfooddetail = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length !== 0) {
            con.query(`select * from food where f_id='${req.query.f_id}'`, (err, result) => {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'No Such Food' });
                } else {
                    var sql = `select * from food where f_id='${req.query.f_id}'`;
                    con.query(sql, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching food.. !' });
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

