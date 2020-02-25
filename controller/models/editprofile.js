var con = require('../../connection');
var editprofile =function(){ }

editprofile.prototype.editProfile = (req,res)=>
{
    // con.query(`select  from user where email='${req.body.email}'`,(err,result)=>
    // {
    //     if(result.length == 0 )
    //     {
            var sql = `update user set username ='${req.body.username}',mob_no =${req.body.mob_no},
            address ='${req.body.address}',city ='${req.body.city}'  where email='${req.body.email}'`;
            con.query(sql,(err,result)=>
            {
                if(err)
                {
                    res.send('Error');
                }
                else
                {
                    if(result.length > 0)
                    {
                        res.json({'error':true, 'message':'Error'});
                    }
                    else
                    {
                       res.json({ 'success': true, 'message': 'Profile Updated' });
                    }
                   
                }
            });
        // }else{
        //     res.json('Please Select Diff. Password');
        // }
    // });

}


module.exports = new editprofile();