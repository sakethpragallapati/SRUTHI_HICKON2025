const mongoose = require('mongoose');
require('dotenv').config();  // To load variables from the .env file
const MONGO_URI="mongodb://localhost:27017/grievancelogindb";
const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI).then(
        "console.log('MongoDB Connected');"
    ).catch((err) => console.log(err));
};

module.exports = connectDB;
