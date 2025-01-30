const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URL;

async function connectDB() {
    try {
        await mongoose.connect(mongoDB);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error: ", err);
    }
}

module.exports = connectDB;
