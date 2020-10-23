const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { mongoose } = require('./db.js');
var employeeController = require('./controller/furnitureController.js');
var staffController = require('./controller/staffController.js');
var customerController = require('./controller/customerController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin:'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server start at port : 3000'));


// localjost : 3000/furniture
app.use('/funiture', employeeController);

// localjost : 3000/staff
app.use('/staff', staffController);

//localjost : 3000/staff
app.use('/customer', customerController);