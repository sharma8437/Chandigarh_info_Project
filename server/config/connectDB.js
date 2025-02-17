const mongoose = require("mongoose");
require("dotenv").config();

const mongo_url = process.env.MONGODB_URL;


const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url); 
    console.log(" Database connected successfully!");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
  }

};

module.exports = connectDB;
