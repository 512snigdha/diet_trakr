const express = require("express")
const connectDB = require("./config/db");
const cors = require("cors");
const persons = require("./routes/api/persons");
 
//connecting to MONGODB
//connectDB();



//Installing the app
const app = express();

// enabling CORS here for safety of access of info from other domain
app.use(cors());
// handle JSON parsing properly
app.use(express.json({
    extended: false
}))
//use4 the api grp instead of multiple paths for mul routes
app.use("/api/persons",persons)
const port = process.env.PORT || 5000
app.listen(port,() =>
console.log(`Server is runnning on port ${port}`)
)