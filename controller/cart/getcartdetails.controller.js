const con = require('../../config/connection');

module.exports.getcartdetails = (req, res) => {

    const r_id = Number(req.body.r_id);
    const token = req.headers['auth_token'];
    con.query(`select * from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`select  *  from cart where r_id=${r_id} and email='${req.body.email}'`, function (err, result) {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'no items !' });
                } else {
                    const sql = `select * from cart where r_id=${r_id} and email='${req.body.email}'`;
                    con.query(sql, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching Cart Details.. !' });
                        } else {
                            res.json(result);
                        }
                    });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}



