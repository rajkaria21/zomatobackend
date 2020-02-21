var con = require('../../connection');
var searchbyres = function(){}

searchbyres.prototype.searchbyRes = (req,res)=>{
    console.log("called")
    //var sql =`select * from food where food_name='${req.body.food_name}'`;
    var sql =`select * from restaurants where restaurant_name LIKE '%${req.body.restaurant_name}%'`;

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




module.exports = new searchbyres();