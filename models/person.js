const { Router } = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    Name:{
    type: String,
    required: true
    },
    Age:{
        type: Number,
        required: true
        },
        Gender:{
            type: String,
            required: true
            },
            height:{
                type: Number,
                required: true
                },
                weight:{
                    type: Number,
                    required: true
                    },
                   Disease: {
                        type: String,
                        required: true
                        },

                    Date:{
                        type: Date,
                        required: true
                        },
                    
})

 module.exports = Person;