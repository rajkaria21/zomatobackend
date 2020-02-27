var con = require('../config/connection');
var searchbyres = function(){}

searchbyres.prototype.searchbyRes = (req,res)=>
{
    var sql =`select * from restaurants where restaurant_name LIKE '%${req.body.restaurant_name}%'`;
    con.query(sql,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching food.. !' });
        }
        else
        {
            res.json(result);
        }
    }); 
}

module.exports = new searchbyres();