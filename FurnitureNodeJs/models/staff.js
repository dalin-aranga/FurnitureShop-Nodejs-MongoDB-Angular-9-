const mongoose = require('mongoose');


var Staff = mongoose.model('Staff',{
    name : {type :String},
    status : {type :String},
    age :{type: Number},
    workArea : {type : String},
    address :{type: String},
    joinDate : {type: String},


});
module.exports = { Staff };