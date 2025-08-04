// Set up Mongoose Database connection
const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connecting Success");
  } catch (error) {
    console.log("Connect Error");
  }
};
