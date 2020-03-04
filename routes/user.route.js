const express = require('express');
const app = express.Router();

const registercontrol = require('../controller/user/register.controller');
const logincontrol = require('../controller/user/login.controller');
const validationmiddleware = require('../middleware/validation');
const forgotpasswordcontrol = require('../controller/user/forgotpassword.controller');

app.post('/users/register',validationmiddleware.validation,registercontrol.register);
app.post('/users/login',logincontrol.login);
app.post('/users/forgotpassword',forgotpasswordcontrol.forgotpassword);



module.exports = app;