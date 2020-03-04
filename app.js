const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./routes/user.route'));
app.use(require('./routes/restaurent.route'));


app.listen(4000,()=>{
    console.log('server Started');
});


