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

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const Users = mongoose.model('Users', userSchema);

module.exports = {
	Users,
  Account,
};