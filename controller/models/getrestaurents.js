var con = require('../../connection');
var getrestaurents = function(){ }

getrestaurents.prototype.getRestaurents = (req,res)=>{
    var sql = 'select * from restaurants';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            res.send("Error Fetching in Restaurents");
        }else{
            res.send(result);
        }
    });
}

module.exports =new getrestaurents();
