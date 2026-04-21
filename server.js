const express = require("express")
const connectDB = require("./config/db");
const cors = require("cors");
const persons = require("./routes/api/persons");
const path = require('path');
require('dotenv').config({ path: "./.env" })

console.log("Environment: Starting Diet_Trakr Server");
console.log("PORT:", process.env.PORT || 5000);

// Connecting to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Enabling CORS here for safety of access of info from other domain
app.use(cors());
// handle JSON parsing properly
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Use the api grp instead of multiple paths for multiple routes
app.use("/api/persons", persons)

// Health check route
app.get("/api/test", (req, res) => {
    res.json({ message: "API is working fine!" });
});

// Serve the Static Files Along with the API on the same port
app.use(express.static(
    path.join(__dirname, "./client/build")
));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    )
})
const port = process.env.PORT || 5000
app.listen(port, () =>
    console.log(`✓ Server is running on port ${port}`)
)