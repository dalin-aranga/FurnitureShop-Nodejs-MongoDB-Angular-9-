const mongoose = require('mongoose');


var Customer = mongoose.model('Customer1',{
    name : {type :String},
    orderName : {type :String},
    distric :{type: String},
    phoneNumber : {type : Number},
    address :{type: String},
    totalPrice : {type: Number},


});
module.exports = { Customer };