const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
    username:String,
    requried:true
    },
    {
    password:String,
    requried:true
    },
    {
    firstName:String,
    requried:true
    },
    {
    lastName:String,
    requried:true
    })

const Users = mongoose.model("Users",userSchema);

module.exports=Users;