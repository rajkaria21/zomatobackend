const con = require('../../config/connection');

module.exports.delcartdetails = (req, res) => {

    const r_id = Number(req.body.r_id);
    const token = req.headers['auth_token'];
    con.query(`select * from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
        if (result.length != 0) {
            const sql = `delete from cart where r_id=${r_id} and email='${req.body.email}'`;
            con.query(sql, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Deleting Cart Details.. !' });
                } else {
                    res.json({ 'success': true, 'message': 'Deleted!' });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}



