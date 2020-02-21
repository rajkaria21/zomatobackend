var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./controller'));
app.listen('3002',()=>{
    console.log('server started');
});