const con = require('../../config/connection');

module.exports.addtocart = (req, res) => {
    const params = [req.body.f_id, req.body.r_id, req.body.qty, req.body.amount, req.body.total_amount, req.body.email];
    con.query(`select * from cart where email='${req.body.email}' and f_id=${req.body.f_id}`, function (err, result) {
        if (result.length == 0) {
            const token = req.headers['auth_token'];
            con.query(`select auth_token from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
                if (result.length !== 0) {
                    con.query('INSERT INTO cart (f_id,r_id,qty,amount,total_amount,email)VALUES(?,?,?,?,?,?)', params, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Adding Order.. !' });

                        } else {
                            res.json({ 'success': true, 'message': 'Order added to Cart' });
                        }
                    });
                } else {
                    res.json({ 'error': true, 'message': 'Wrong Auth Token' });
                }
            })
        } else {
            if (req.body.qty == 0) {
                con.query(`delete from cart where email='${req.body.email}' and f_id=${req.body.f_id}`);
            } else {
                con.query(`update cart set qty=${req.body.qty},total_amount=${req.body.total_amount} where email='${req.body.email}' and f_id=${req.body.f_id}`);
                res.json({ 'success': true, 'message': 'Updated' });
            }
        }
    });
}

