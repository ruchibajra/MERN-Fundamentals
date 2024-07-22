const mongoose = require("mongoose");

// import dotenv, need to install dotenv
require("dotenv").config();
const mongoURI = process.env.db_url;

const connectDB = async() => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connected!");
    }catch(error){
        console.log(error);
    }
}

module.exports= connectDB;