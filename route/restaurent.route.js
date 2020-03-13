const express = require('express');
const app = express.Router();
const path = require('path');
const con = require('../config/connection')
const multer = require('multer');
const DIR = '/home/rajkaria/Documents/Zomato/controller/restaurent/uploads/image';
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

const getrestaurentcontrol = require('../controller/restaurent/getrestaurent.controller');
const getrestaurentdetailcontrol = require('../controller/restaurent/getrestaurentdetail.controller');
const searchrestaurentcontrol = require('../controller/restaurent/searchrestaurent.controller');
const addratingcontrol = require('../controller/restaurent/addrating.controller');
const viewaverageratingcontrol = require('../controller/restaurent/viewaveragerating.controller');
const getreviewcontrol = require('../controller/restaurent/getreviews.controller');

app.get('/res/getreviews', getreviewcontrol.getreview);
app.get('/res/restaurents', getrestaurentcontrol.getrestaurents);
app.get('/res/restaurentdetail', getrestaurentdetailcontrol.getrestaurentdetails);
app.get('/res/search', searchrestaurentcontrol.searchbyrestaurent);
app.post('/res/addrating', addratingcontrol.addrating);
app.get('/res/viewrating', viewaverageratingcontrol.viewaveragerating);
app.post('/res/addreview', upload.single('photo'), function (req, res) {
    const review = {
        'r_id': req.body.r_id,
        'email': req.body.email,
        'comment': req.body.comment,
        'photo': req.file.path
    }
    if (!req.file) {
        res.json({ 'error': true, 'message': 'Error Fetching Image' });
    } else {
        const token = req.headers['auth_token'];
        con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
            if (result.length != 0) {
                con.query(`select * from review where r_id=${req.body.r_id} and email='${req.body.email}' and photo='${req.file.path}'`, (err, result) => {
                    if (result.length == 0) {
                        con.query(`INSERT INTO review SET ?`, review, function (err, result) {
                            if (err) {
                                res.json({ 'error': true, 'message': 'Error Adding Review' });
                            } else {
                                res.json({ 'success': true, 'message': 'Review Added Successfully' });
                            }
                        });
                    } else {
                        res.json({ 'error': true, 'message': 'Review Already Added' });
                    }
                })
            } else {
                res.json({ 'error': true, 'message': 'Wrong Auth Token' });
            }
        });
    }
});


module.exports = app;