const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    uname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = new mongoose.model('User',userSchema)

module.exports = User;