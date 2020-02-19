var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Attach connection file

var con = require('./connection')


// // insert data

// app.get('/insert',(req,res)=>{
//     con.query("insert into user values('vijay','jay123')",(err,result)=>{
//         if(err){
//             // console.log("error");
//         }else{
//             console.log("inserted"  );
//         }
//     });
// });

// // Fetch Data

// app.get('/fetchdata',(req,res)=>{
    
//     con.query("SELECT * FROM user",(err,result)=>{

//         res.send(result);
    
//     });
// }) ;

// app.get('/restaurants',(req,res)=>{
//     let sql = 'select * from restaurants';
//     con.query(sql,(err,result)=>{
//         if(err){
//             res.send("Error Fetching in Restaurants");
//         }else{
//             res.send(result);
//         }
//     });
// });


app.post('/login', (req, res) => {
    // console.log(req.body.username);
    let sql = 'select * from user where username = "' + req.body.username + '"';
    con.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            if(req.body.password === result[0].password) {
              res.send('Login successfully');
            }
            else {
              res.send('Email or passowrd not match');
            }
        }
    })
  });


app.listen('3000',()=>{
    console.log('server started');
});