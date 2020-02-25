var con = require('../../connection');
var getfood = function(){}

getfood.prototype.getFood = (req,res)=>
{
    var sql =`select * from food where f_id='${req.body.f_id}'`;
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

module.exports = new getfood();