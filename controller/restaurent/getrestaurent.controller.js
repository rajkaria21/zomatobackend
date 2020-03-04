const con = require('../../config/connection');

module.exports.getrestaurents = (req, res) => {

    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`,(err,result)=>{
        
        if (result.length !== 0){
            const sql = 'select * from restaurants';
            con.query(sql, (err, result) => {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Fetching Restaurents.. !' });
                }
                else {
                    res.json(result);
                }
            });
        }else{
            res.json({ 'error': true, 'message': 'Wrong Auth Code' });
        }
    });
}