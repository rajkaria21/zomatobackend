DataBaseConnection=require('../../connection');
middleware={};

middleware.validationCheck=async function(req,res,next){
    console.log(req.body);
    
    
}


middleware.registerCheck=async function(req,res,next){
    console.log(req.body);
    data=[];
    check=false;
    count=0;

    try{
        if(check==false){
            checkQuery=`SELECT * FROM user where email='${req.body.email}'`;
            await DataBaseConnection.query(checkQuery,function (err, result){
                if(result.length==1){
                count+=1;
                data.push({status:"Error",message:"Email Already Exists"});
                check=true;
                console.log("Email Already Exists");
                }
            });
        }

        if(check==false){
            //Phone Number Already Exists
            checkQuery=`SELECT * FROM user where mob_no=${req.body.mob_no}`;
            await DataBaseConnection.query(checkQuery,function(err,result){
                if(result.length==1){
                        count+=1;
                        // data.status="Error";
                        // data.message="Phone Number Already Exists";
                        data.push({status:"Error",message:"Phone Number Already Exists"});
                        check=true;
                        console.log("Phone Number Already Exists");
                    }
                });
            }

            setTimeout(function(){
                if(count==0){
                    data.push({status:"OK",message:""});
                    res.send(data);
                    req.app.set('status',"OK");
                    next();
                }
                else if(count>0){
                    return res.send(data);
                }   
            },300);
            
    }catch(e){
        console.log(e);
    }
}

module.exports=middleware;