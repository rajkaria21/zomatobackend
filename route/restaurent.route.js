const express = require('express');
const app = express.Router();
// const path = require('path');
const con = require('../config/connection')
// const multer = require('multer');
// const multipart = require('multiparty')
// const DIR = '/home/rajkaria/Documents/Zomato/controller/restaurent/uploads/image';
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, DIR);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
//     }
// });


// const fileFilter = function (req, file, cb) {

//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb({
//             success: false,
//             message: 'Invalid file type. Only jpg, png image files are allowed.'
//         }, false);
//     }
// };

// const upload = multer({
//     storage: storage, fileFilter: fileFilter
// });

const getrestaurentcontrol = require('../controller/restaurent/getrestaurent.controller');
const getrestaurentdetailcontrol = require('../controller/restaurent/getrestaurentdetail.controller');
const searchrestaurentcontrol = require('../controller/restaurent/searchrestaurent.controller');
const addratingcontrol = require('../controller/restaurent/addrating.controller');
const viewaverageratingcontrol = require('../controller/restaurent/viewaveragerating.controller');
const getreviewcontrol = require('../controller/restaurent/getreviews.controller');
// const reviewvalidate = require('../middleware/reviewvalidation');
const addreviewcontrol = require('../controller/restaurent/addreview.controller');
app.get('/res/getreviews', getreviewcontrol.getreview);
app.get('/res/restaurents', getrestaurentcontrol.getrestaurents);
app.get('/res/restaurentdetail', getrestaurentdetailcontrol.getrestaurentdetails);
app.get('/res/search', searchrestaurentcontrol.searchbyrestaurent);
app.post('/res/addrating', addratingcontrol.addrating);
app.get('/res/viewrating', viewaverageratingcontrol.viewaveragerating);
app.post('/res/addreview',addreviewcontrol.addreview)

    // const r_id = req.body.r_id;
    // const email = req.body.email;
    // const comment = req.body.comment;
    // const photo = req.file.path;
    // const token = req.headers['auth_token'];

    // con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
    //     if (result.length != 0) {

    //         con.query(`INSERT INTO review(r_id,email,comment,photo) VALUES ('${r_id}','${email}','${comment}','${photo}')`, function (err, result) {
    //             if (err) {

    //                 res.json({ 'error': true, 'message': 'Error Adding Review' });
    //             } else {
    //                 res.json({ 'success': true, 'message': 'Review Added Successfully' });
    //             }
    //         });
    //     } else {
    //         res.json({ 'error': true, 'message': 'Wrong Auth Token' });
    //     }
    // });



module.exports = app;
