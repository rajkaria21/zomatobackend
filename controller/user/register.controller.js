const con = require('../../config/connection');
const jwt = require('jsonwebtoken');
const emailExistence = require('email-existence')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.register = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
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
    // emailExistence.check(user.email, function (error, response) {
    //     if (response == true) {
    con.query(`select * from user where email='${req.body.email}'`, (err, result) => {
        if (result.length == 0) {
            con.query(`INSERT INTO user SET ?`, user, function (err, result) {
                if (err) {
                    res.json({ 'error': true, 'message': 'Error Adding User' })
                } else {
                    res.status(200).json({ auth: true, 'message': 'Registered Successfully', 'auth_token': token });
                }
            })
        } else {
            res.json({ 'error': true, 'message': 'Email Already Exists' })
        }
    });
    // } else {
    //     res.status(404);
    //     res.json({ 'error': true, 'message': 'Invalid Email' });
    // }
}
