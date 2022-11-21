const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    Password:{
        type : String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mini_project',signupTemplate);
