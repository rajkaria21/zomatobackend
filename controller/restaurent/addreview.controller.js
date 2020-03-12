const con = require('../../config/connection');
const path = require('path');
const multer = require('multer');

module.exports.addreview =(req, res) =>{
    const review = {
        'r_id': req.body.r_id,
        'email': req.body.email,
        'comment': req.body.comment,
        'photo': req.file.path
    }
    if (!req.file) {
        res.json({ 'error': true, 'message': 'Error Fetching Image' });
    } else {
        con.query(`select * from where r_id=${req.body.r_id} and email='${req.body.email}'`,(err,result)=>{
            if(result.length == 0){
                con.query(`INSERT INTO review SET ?`, review, function (err, result) {
                    if (err) {
                        res.json({ 'error': true, 'message': 'Error Adding Review' });
                    } else {
                        res.json({ 'success': true, 'message': 'Review Added Successfully' });
                    }
                });
            }else{
                res.json({ 'success': true, 'message': 'Review Added Successfully' });
            }
        })
       
    }
}