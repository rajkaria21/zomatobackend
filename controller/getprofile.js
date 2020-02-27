var con = require('../config/connection');
var getprofile = function(){}


getprofile.prototype.getProfile = (req,res)=>
{
    var sql = `select * from user where email='${req.body.email}'`;
    con.query(sql,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching User Details.. !' });
        }
        else
        {
            res.json(result);
        }
    });
}

module.exports = new getprofile();
