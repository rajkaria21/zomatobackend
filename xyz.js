
// if(res.code == 'ERR_DUP_ENTRY'){
//     res.send(myerr);
// }else{
//     res.send('try another email id');
// }   


// if(email == req.body.email){
//     res.send(myerr);
// }else{
//     res.send('')
// }
// app.post('/register',(req,res)=>{
//     var users = {
//         u_id:req.body.u_id,
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         mob_no:req.body.mob_no,
//         address:req.body.address,
//         city:req.body.city
//     }
//     con.query('insert into user',(err,result)=>{
//         if(err){
//             res.send(error);
//         }else{
//             res.send('Register Successfully');
//             res.send(result);
//         }
//     });
//     console.log(users);
// })

// app.post('/login', (req, res) => {
//     // console.log(req.body.username);
//     let sql = 'select * from user where username = "' + req.body.username + '"';
//     con.query(sql, (err, result) => {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             if(req.body.password === result[0].password) {
//               res.send('Login successfully');
//             }
//             else {
//               res.send('Email or passowrd not match');
//             }
//         }
//     })
//   });

function fieldExists(email,phone,callback){

    const data={};
    check=false;

    // Email Already Exists
    if(check==false){
        checkQuery=`SELECT * FROM user where email='${email}'`;
        con.query(checkQuery,function (err, result){
            if(isNaN(result)){
                data.status="Error";
                data.message="Email Already Exists";
                check=true;
                checkMyFunc(data,check);
            }
        });
    }

    if(check==false){
        //Phone Number Already Exists
        checkQuery=`SELECT * FROM user where mob_no=${mob_no}`;
        con.query(checkQuery,function(err,result){
            if(isNaN(result)){
                data.status="Error";
                data.message="Phone Number Already Exists";
                check=true;
                checkMyFunc(data,check);
            }
        });
    }

    function checkMyFunc(data,check){
        console.log(data,check);
        if(check==true){
            callback(data);
        }
    }
}

