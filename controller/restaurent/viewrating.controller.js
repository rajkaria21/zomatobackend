var con = require('../../config/connection');

module.exports.viewaveragerating = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length != 0) {
            con.query(`SELECT (SUM(rating) / COUNT(rating)) as rating FROM rating WHERE r_id = '${req.query.r_id}'`, (err, resultOuter) => {
                if (resultOuter.length == 0) {
                    res.json({ 'error': true, 'message': 'Error Fetching Ratings' });
                } else {
                    con.query(`SELECT rating FROM rating WHERE r_id = '${req.query.r_id}'`, (err, result) => {
                        if (result.length == 0 || req.query.r_id == '') {
                            res.json({ 'error': true, 'message': 'No Ratings or Enter Something' });
                        }
                        else {
                            var rate;
                            var five_count = 0;
                            var four_count = 0;
                            var three_count = 0;
                            var two_count = 0;
                            var one_count = 0;
                            for (i = 0; i < result.length; i++) {
                                rate = result[i].rating;
                                if (rate == 5) {
                                    five_count++;
                                } else if (rate == 4) {
                                    four_count++;
                                } else if (rate == 3) {
                                    three_count++;
                                } else if (rate == 2) {
                                    two_count++;
                                } else if (rate == 1) {
                                    one_count++;
                                }
                            }
                            res.json({ Five: five_count, Four: four_count, Three: three_count, Two: two_count, One: one_count, Total: result.length, Avg: resultOuter[0].rating })
                        }
                    })
                }
            })
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
}

