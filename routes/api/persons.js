const express = require("express");
// Handle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("test api route is working fine")
})

// @route GET api/persons
// @descripton give all the persons data
// @access public
// READ operation
router.get("/",(req, res) => {
   // Person.find()
    //.then((person) => res.json(persons))
    //.catch((err) => res.status(404).json({ nopersonsfound: "mongoDB could not found the Person data"}))
    res.json({ OK: "All persons route is working fine" })
})
// @route GET api/persons
// @descripton give all the persons data
// @access public
// READ operation
router.get("/:id",(req, res) => {
    // Person.findById()
     //.then((person) => res.json(persons))
     //.catch((err) => res.status(404).json({ nopersonsfound: "mongoDB could not found the Person data"}))
     res.json({ OK: "Get persons by id route is working fine" })
 })
      // @route GET api/persons/:id
      // @description get single person Data by searching for the ID
      // @access public
      // CREATE operation

router.post("/", (req, res) => {
    //Person.create(req.params.id)
    //.then(personalbar) => res.json((Person))
    //  ({ msg: "All persons route is working fine" })
    //.catch((err) => res.status(404).json({error: "unable to add this person" }))
    res.json({ OK: "All persons route is working fine" })
    
})


      // @route GET api/persons/:id
      // @description find a person Data by its ID and update it
      // @access public
      // READ, UPDATE, SEARCH operation

router.put("/:id", (req, res) => {

    //Person.findByIdAndUpdate(req.params.id, req.body)
    //.then(person) => res.json((Person))
    //  ({ msg: "This person's data is updated successfully" })
    //.catch((err) => 
    //res.status(400).json({error: "unable to add this person" }))
  
    res.json({ OK: "Update persons route is working fine" })
    
})
router.delete("/:id", (req, res) => {

    //Person.findByIdAndUpdate(req.params.id, req.body)
    //.then(person) => res.json((Person))
    //  ({ msg: "This person's data is updated successfully" })
    //.catch((err) => 
    //res.status(400).json({error: "unable to add this person" }))
  
    res.json({ OK: "Update persons route is working fine" })
})


module.exports = router;