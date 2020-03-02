var con = require('../../config/connection');
var editprofile = function () { }

editprofile.prototype.editProfile = (req, res) => {
    // con.query(`select username,mob_no,address,city from user where email='${req.body.email}'`,(err,result)=>
    // {
    //     if(result.length == 0 )
    //     {
    var sql = `update user set username ='${req.body.username}',mob_no =${req.body.mob_no},
            address ='${req.body.address}',city ='${req.body.city}'  where email='${req.body.email}'`;
    con.query(sql, (err, result) => {
        if (err) {
            res.json({ 'error': true, 'message': 'Error' });
        }
        else {
            if (result.length > 0) {
                res.json({ 'error': true, 'message': 'Error' });
            }
            else {
                res.json({ 'success': true, 'message': 'Profile Updated' });
            }

        }
    });
    //     }else{
    //         res.json('Already Updated or Change Data');
    //     }
    // });

}


module.exports = new editprofile();