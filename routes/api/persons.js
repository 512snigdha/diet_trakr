const express = require("express");
// Handle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("test api route is working flie")
})

// @route GET api/persons
// @descripton give all the persons data
// @access public

router.get("/",(req, res) => {
   // Person.find()
    //.then((person) => res.json(persons))
    //.catch((err) => res.status(404).json({ nopersonsfound: "mongoDB could not found the Person data"}))
    res.json({ OK: "All persons route is working file" })
})
module.exports = router;