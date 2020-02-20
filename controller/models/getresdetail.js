var con = require('../../connection');
var getresdetails = function(){}

getresdetails.prototype.getResdetails = (req,res)=>{
    var mysql =`select * from restaurants where r_id='${req.body.r_id}'`;
    con.query(mysql,(err,result)=>{
        if(err){
            // console.log(err);
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents Details .. !' });
        }else{
            res.json(result);
        }
    })
}

module.exports = new getresdetails();
