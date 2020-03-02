var con = require('../../config/connection');
var delcartdetails = function () { }


delcartdetails.prototype.delCartDetails = (req, res) => {

    let r_id = Number(req.body.r_id);
    var sql = `delete from cart where r_id=${r_id} and email='${req.body.email}'`;
    con.query(sql, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error Deleting Cart Details.. !' });
        }
        else {
            res.json({ 'success': true, 'message': 'Deleted!' });
        }
    });
}

module.exports = new delcartdetails();


