var con = require('../../config/connection');

module.exports.searchbyrestaurent = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length !== 0) {
            con.query(`select * from restaurants where restaurant_name LIKE '%${req.query.restaurant_name}%'`, (err, result) => {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'No Such Restaurents' });
                } else {
                    var sql = `select * from restaurants where restaurant_name LIKE '%${req.query.restaurant_name}%'`;
                    con.query(sql, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching Restaurent.. !' });
                        }
                        else {
                            res.json(result);
                        }
                    });
                }
            })

        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    })
}

