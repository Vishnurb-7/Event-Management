const mongoose = require('mongoose');

const schema = mongoose.Schema

const userSchema = new schema({
    email : {type:String, required:true,trim:true},
    phone :{type:Number,trim:true},
    password :{type:String , required:true},

})

const User = mongoose.model("User", userSchema) 
exports.User = User