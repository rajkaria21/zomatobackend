const multer = require('multer');
const DIR = '/home/rajkaria/Documents/Zomato/controller/restaurent/uploads/image';
const path = require('path');
const con = require('../../config/connection')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, DIR);
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

let fileFilter = function (req, file, cb) {
    var allowedMimes = ['image/jpg', 'image/jpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb({
            success: false,
            message: 'Invalid file type. Only jpg, png image files are allowed.',
        }, false);
    }
};
let obj = {
    storage: storage,
    limits: {
        fileSize: 200 * 1024
    },
    fileFilter: fileFilter
};


const upload = multer(obj).single('photo');
module.exports.addreview = (req, res) => {
    const token = req.headers['auth_token'];
    con.query(`select auth_token from user where auth_token='${token}'`, (err, result) => {
        if (result.length != 0) {
            upload(req, res, function (error) {
                if (error) {
                    res.status(500);
                    if (error.code == 'LIMIT_FILE_SIZE') {
                        error.message = 'File Size is too large. Allowed file size is 200KB';
                        error.success = false;
                    }
                    return res.json(error);
                } else {
                    if (!req.file) {
                        res.status(500);
                        res.json('file not found');
                    } else {
                        const r_id = req.body.r_id;
                        const email = req.body.email;
                        const comment = req.body.comment;
                        const photo = req.file.path;

                        con.query(`INSERT INTO review(r_id,email,comment,photo) VALUES ('${r_id}','${email}','${comment}','${photo}')`, function (err, result) {
                            if (err) {
                                res.json({ 'error': true, 'message': 'Error Adding Review' });
                            } else {
                                res.json({ 'success': true, 'message': 'Review Added Successfully' });
                            }
                        });
                    }
                }
            })
        } else {
            res.json({ 'error': true, 'message': 'Wrong Auth Token' });
        }
    });
} 