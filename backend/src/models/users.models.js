const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
        username:{
        type:String,
        requried:true
        },

        password:{
        type:String,
        requried:true
        },
        firstName:{
        type:String,
        requried:true
        },
        
        lastName:{
        type:String,
        requried:true
        }
},
{
    timestamps:true
})

const Users = mongoose.model("Users",userSchema);

module.exports=Users;