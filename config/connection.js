var sql = require('mysql');

var dbcon = sql.createConnection({
    host:'localhost',
    port: '3333',
    user:'root',
    password:'',
    database:'zomato'
});
dbcon.connect((err)=>{
    if(err){
        console.log('Error');
    }else{
        console.log('connected');
    }
});


module.exports = dbcon;