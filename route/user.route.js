const express = require('express');
const app = express.Router();

const registercontrol = require('../controller/user/register.controller');
const logincontrol = require('../controller/user/login.controller');
const validationmiddleware = require('../middleware/validation');
const editvalidationmiddleware = require('../middleware/editprofilevalidation');
const forgotpasswordcontrol = require('../controller/user/forgotpassword.controller');
const verifyotpcontrol = require('..//controller/user/verifyotp.controller');
const getprofilecontrol = require('../controller/user/getprofile.conroller');
const resetpasswordcontrol = require('../controller/user/resetpassword.controller');
const editprofilecontrol = require('../controller/user/editprofile.controller');
const changepasswordcontrol = require('../controller/user/changepassword.controller');

app.post('/users/register',validationmiddleware.validation,registercontrol.register);
app.post('/users/login',logincontrol.login);

app.post('/users/forgotpassword',forgotpasswordcontrol.forgotpassword);
app.post('/users/verifyotp',verifyotpcontrol.verifyotp);

app.post('/users/profiledetails',getprofilecontrol.getprofile);
app.post('/users/resetpassword',resetpasswordcontrol.resetpass);
app.post('/users/changepassword',changepasswordcontrol.changepass);
app.post('/users/editprofile',editvalidationmiddleware.editprofilevalidation,editprofilecontrol.editprofile);

module.exports = app;