const con = require('../../config/connection');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.register = (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    const user = {
        'username': req.body.username,
        'email': req.body.email,
        'password': hashedPassword,
        'mob_no': req.body.mob_no,
        'address': req.body.address,
        'city': req.body.city

    }
    const token = jwt.sign({ user }, 'token');
    user.auth_token = token;
    con.query(`select * from user where email='${req.body.email}'`, (err, result) => {
        if (result.length == 0) {
            con.query(`INSERT INTO user SET ?`, user, function (err, result) {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Adding User' })
                } else {
                    res.status(200).json({ auth: true, token, 'message': 'Registered Successfully' });
                }
            })
        } else {
            res.json({ 'error': true, 'message': 'Email Already Exists' })
        }
    })

}
