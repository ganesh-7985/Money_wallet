require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB(){
    try{
      await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
      console.log("The DataBase is Connected");
    }
    catch(error){
      console.log("Error in Connecting the DataBase",error)
    }
}


module.exports= connectDB

