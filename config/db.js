const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.DB_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✓ Successfully connected to mongoDB");
    } catch(err) {
        console.error("✗ MongoDB Connection Error:", err.message);
        console.error("DB_URI:", process.env.DB_URI ? "Set" : "NOT SET");
        // Don't exit - allow server to start for troubleshooting
        setTimeout(() => {
            console.log("Retrying MongoDB connection...");
            connectDB();
        }, 5000);
    }
};

module.exports = connectDB;