const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FurnitureDB',(err)=>{
    if(!err)
    console.log('MongoDB connection Success.......!');
    else
        console.log('Error In DB connection : ' + JSON.stringify(err,undefined,2));
    });

module.exports = mongoose;
