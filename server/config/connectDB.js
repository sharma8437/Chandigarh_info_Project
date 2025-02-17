const mongoose = require("mongoose");
require("dotenv").config();

const mongo_url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url)
      console.log("database connected");
 
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
