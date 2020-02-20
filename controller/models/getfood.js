var con = require('../../connection');
var getfood = function(){}

getfood.prototype.getFood = (req,res)=>{
    console.log(req.body);

    var sql =`select * from food where r_id='${req.body.r_id}'`;
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching food.. !' });
            
        }else{
            console.log(result)
            res.json(result);
        }
    })
    
}




module.exports = new getfood();