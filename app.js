var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./config/index'));
// Server Creation

app.listen('3000', () => {
    console.log('server started');
});