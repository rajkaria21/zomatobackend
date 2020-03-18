const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public/image'));
 
app.use(require('./route/user.route'));
app.use(require('./route/restaurent.route'));
app.use(require('./route/food.route'));
app.use(require('./route/cart.route'));
app.use(require('./route/order.route'));

app.listen(4000,()=>{
    console.log('Server Started');
});


