const express = require('express');
const mongoose= require('mongoose');

const userModel= mongoose.Schema({
    UserId:{
        type:String,
        required:true,
        unique:true,
    },
    UserName:{
        type:String,
        default:null
    },
    Userpassword:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model('userData',userModel);