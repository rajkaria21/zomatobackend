var con = require('../../connection');
var login =function(){ }
const bcrypt = require("bcrypt")
 const saltRounds = 10;

// const passwordEnteredByUser = "raj1234"
// const hash = "$2b$10$4Fyf/20096Zl6K8ijKLjJ.fOB9sqviMkYZqCufe9vtAJeOEoHHB6m"

login.prototype.getUsers = (req,res)=>
{

  var sqlquery = 'select * from user where email = "' + req.body.email + '"';
  con.query(sqlquery,(err,result)=>
  {
      if(err)
      {
        res.send('Error');
      }
      else
      {
        if(result.length > 0)
        {
          bcrypt.compareSync(req.body.password, hash, function(err, result)
          {
            if(err)
            {
              res.json(err)
            }
            else if(result)
            {
              console.log("Password doesn't match!")
            } 
            else
            {
              console.log("Password matches!")
            }
          });
        }
      }
});
}
module.exports = new login();
