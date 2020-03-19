var con = require('../../config/connection');
var resultArray = [];
function filterFood(data) {
    if (data.length != 0) {
        resultArray.push(data);
        return resultArray;

    } else {
        return resultArray.push({ 'error': true, 'message': "Data Not Found" });
    }
}

module.exports.filterfood = async (req, res) => {

    const token = req.headers['auth_token'];
    var foodType = req.query.food_type;
    var foodArray = foodType.split(',');

    await con.query(`select auth_token from user where auth_token='${token}'`, async (err, result) => {
        if (result.length !== 0) {
            promise = new Promise(async function (resolve, reject) {
                for (i = 0; i < foodArray.length; i++) {
                    var food_types = foodArray[i];

                    var sql =
                        `select distinct restaurants.r_id,
                        restaurants.restaurant_name,
                        restaurants.cuisin_type,restaurants.address,
                        restaurants.phone_no,restaurants.opening_hours,
                        restaurants.photos from food 
                        join restaurants on food.r_id = restaurants.r_id where food_type LIKE '%${food_types}%'`;

                    var promiseIn = new Promise(async function (resolveI, reject) {
                        resultArray = [];
                        con.query(sql, async (err, result) => {
                            if (result.length == 0) {
                                filterFood(result);
                                resolveI(resultArray);
                            } else {
                                filterFood(result);
                            }
                            resolveI(resultArray);
                        });
                    });
                };
                promiseIn.then(function (data) {
                    resolve(data);
                })
            });
            promise.then(function (data) {

                var dt = data[resultArray.length - 1];
                if (dt.length == 0) {
                    res.json({ 'error': true, "message": "No Such Food" })
                } else {
                    res.json({ 'success': true, 'data': data });
                }
            });
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}

