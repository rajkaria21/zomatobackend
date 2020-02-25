var con = require('../../connection');
var getrestaurents = function(){ }

getrestaurents.prototype.getRestaurents = (req,res)=>
{
    var sql = 'select * from restaurants';
    con.query(sql,(err,result)=>
    {
        if(err)
        {
            res.json({ 'error': true, 'message': 'Error Fetching Restaurents.. !' });
        }
        else
        {
            res.json(result);
        }
    });
}

module.exports =new getrestaurents();
