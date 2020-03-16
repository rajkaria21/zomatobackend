var con = require('../../config/connection');

module.exports.getrestaurentdetails = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length !== 0) {
            con.query(`SELECT  * FROM restaurants JOIN food ON restaurants.r_id = food.r_id where restaurants.r_id =${req.query.r_id}`, (err, result) => {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'No Details Found' });
                } else {
                    var mysql = `SELECT  * FROM restaurants JOIN food ON restaurants.r_id = food.r_id where restaurants.r_id =${req.query.r_id}`;
                    con.query(mysql, (err, result) => {
                        if (err) {
                            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
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


// food.f_id,food.food_name,food_img,food_type,food.amount,food.food_details

