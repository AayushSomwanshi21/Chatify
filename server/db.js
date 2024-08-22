const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://aayushsomwanshi21:altair2104@cluster0.gyt1hyu.mongodb.net/Chatify?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
    try {
        await mongoose.connect(mongoDB);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error: ", err);
    }
}

module.exports = connectDB;
