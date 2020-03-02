var con = require('../../config/connection');
var getcartdetails = function () { }


getcartdetails.prototype.getDetails = (req, res) => {

    // let f_id=Number(req.body.f_id);
    let r_id = Number(req.body.r_id);

    con.query(`select  *  from cart where r_id=${r_id} and email='${req.body.email}'`, function (err, result) {
        if (result.length == 0) {
            res.json({ 'error': true, 'message': 'no items !' });
        }
        else {
            var sql = `select * from cart where r_id=${r_id} and email='${req.body.email}'`;
            con.query(sql, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Fetching Cart Details.. !' });
                }
                else {
                    res.json(result);
                }
            });
        }
    });
}

module.exports = new getcartdetails();


