const express = require("express")
//Installing the app
const app = express()
const port = process.env.PORT || 5000
app.listen(port,() =>
console.log(`Server is runnning on port ${port}`)
)