const con = require('../../config/connection');

module.exports.addrating = (req, res) => {
    const rating = {
        'r_id': req.body.r_id,
        'email': req.body.email,
        'rating': req.body.rating
    };
    const token = req.headers['auth_token'];
    con.query(`select * from user where auth_token='${token}' and email = '${req.body.email}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`select * from rating where r_id=${req.body.r_id} and email='${req.body.email}'`, (err, result) => {
                if (result.length == 0) {
                    con.query(`INSERT INTO rating SET ?`, rating, function (err, result) {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Adding Rating' })
                        } else {
                            res.json({ 'success': true, 'message': 'Rating Added Successfully' });
                        }
                    });
                } else {
                    con.query(`update rating set rating=${req.body.rating} where r_id=${req.body.r_id} and email='${req.body.email}'`, function (err, result) {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Updating Rating' })
                        } else {
                            res.json({ 'success': true, 'message': 'Rating Updated Successfully' });
                        }
                    });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}