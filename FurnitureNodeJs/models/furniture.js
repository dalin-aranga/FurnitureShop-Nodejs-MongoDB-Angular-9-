const mongoose = require('mongoose');

var Furniture = mongoose.model('Furniture',{
    name : {type :String},
    price : {type :Number},
    discount :{type: String},
    color : {type : String},
    avalibleCount :{type: Number},
    description : {type: String},


});
module.exports = { Furniture };
