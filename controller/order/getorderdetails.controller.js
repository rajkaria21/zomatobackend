var con = require('../../config/connection');


module.exports.getorderdetails = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select * from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`select * from order_list where email='${req.body.email}'`, (err, result) => {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'No Orders in OrderList' });
                } else {
                    var sql = `select * from order_list where email='${req.body.email}'`;
                    con.query(sql, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching OrderDetails.. !' });
                        }
                        else {
                            res.json(result);
                        }
                    });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });/*  */
        }
    });
}

