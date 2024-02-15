
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    phnno: {
        type: Number,
        required: true
    },

   date: {
        type: Date,
        required: true
    }

})

module.exports = Person = mongoose.model('person',personSchema);