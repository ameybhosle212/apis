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
    encryptedID:String,
    password:{
        type:String,
        required:true
    },
    titles:[String],
    SizeOfData:[Number]
})

const User = new mongoose.model('User',userSchema)

module.exports = User;