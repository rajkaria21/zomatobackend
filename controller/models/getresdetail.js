var con = require('../../connection');
var getresdetails = function(){}

getresdetails.prototype.getResdetails = (req,res)=>
{
    var mysql = `SELECT * FROM restaurants JOIN food ON restaurants.r_id = food.r_id where restaurants.r_id = ${req.body.r_id}`;
    
    con.query(mysql,(err,result)=>{
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
        }
        else
        {
            res.json(result);            
        }
    });
}

module.exports = new getresdetails();
