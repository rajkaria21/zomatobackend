var con = require('../../connection');
var searchbyfood = function(){}

searchbyfood.prototype.searchbyFood = (req,res)=>{
    //var sql =`select * from food where food_name='${req.body.food_name}'`;
    var sql = 
    `select restaurants.r_id,
    restaurants.restaurant_name,
    restaurants.cuisin_type,restaurants.address,
    restaurants.phone_no,restaurants.opening_hours,
    restaurants.photos from food 
    join restaurants on food.r_id = restaurants.r_id where food_name LIKE '%${req.body.food_name}%'`
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




module.exports = new searchbyfood();