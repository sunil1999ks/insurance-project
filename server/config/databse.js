
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kssunil531:sunil%40123@cluster0.cb3zh4a.mongodb.net/insurancedb",);
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
