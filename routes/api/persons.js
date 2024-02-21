const express = require("express");
const Person = require("../../models/person");
// Handle all the route parameters with ease
const router = express.Router();


router.get('/test', (req, res) => {
    res.send("Test API route is working fine")
})

// @router GET api/persons
// @description Give all student details
// @access Public
// READ operation
router.get('/', (req, res) => {
    Person.find()
        .then((persons) => res.json(persons))
        .catch((err) => res.status(404).json({ noPersonsFound: 'MongoDB could not found the Person details' }))
})

// @router GET api/persons/:id
// @description Give single person details by ID
// @access Public
// READ and SEARCH operation
router.get('/:id', (req, res) => {
    Person.findById(req.params.id)
        .then((person) => res.json(person))
        .catch((err) => res.status(404).json({ noStudentFound: 'MongoDB could not find the Person details' }))
        // res.json({ OK: "Get Person by Id route is working fine"})
})

// @router GET api/persons
// @description Add new Person details
// @access Public
// CREATE operation
router.post('/', (req, res) => {
    Person.create(req.body)
        .then((person) => res.json({ msg: 'Person added successfully'}))
        .catch((err) => res.status(400).json({ error: 'Unable to add this Person' }))
        // res.json({ OK: "Create person route is working fine"})
})

// @router GET api/persons/:id
// @description Update Person details
// @access Public
// READ, UPDATE & SEARCH operation
router.put('/:id', (req, res) => {
    Person.findByIdAndUpdate(req.params.id, req.body)
        .then((person) => res.json({ OK: 'Person details updated successfully'}))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Person details' }))
        // res.json({ OK: "Update Person route is working fine"})
})

// @router GET api/persons/:id
// @description Delete Person details
// @access Public
// READ, DELETE & SEARCH operation
router.delete('/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id, req.body)
      .then((person) => res.json({ mgs: 'Persons data deleted successfully' }))
      .catch((err) => res.status(404).json({ error: 'No such a person' }));
});
module.exports = router;
