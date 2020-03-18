var con = require('../../config/connection');

module.exports.filterfood = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length !== 0) {
            var sql =
                `select distinct restaurants.r_id,
            restaurants.restaurant_name,
            restaurants.cuisin_type,restaurants.address,
            restaurants.phone_no,restaurants.opening_hours,
            restaurants.photos from food 
            join restaurants on food.r_id = restaurants.r_id where food_type LIKE '%${req.query.food_type}%'`;

            con.query(sql, (err, result) => {
                if (result.length == 0) {
                    res.json({ 'error': true, 'message': 'No Such Food Found' });
                } else {
                    res.json(result);
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}
