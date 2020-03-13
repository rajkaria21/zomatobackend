var con = require('../../config/connection');

module.exports.searchbyrestaurent = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length !== 0) {
            var sql = `select * from restaurants where restaurant_name LIKE '%${req.query.restaurant_name}%'`;
            con.query(sql, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Fetching food.. !' });
                }
                else {
                    res.json(result);
                }
            });
        }else{
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    })
}

