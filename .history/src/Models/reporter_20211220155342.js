const mongoose = require('mongoose')
const validator = require('validator')


const reporterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (val) => {

            validator.isEmail(val) ? true : throw new Error('Email Must be Unique')
        }
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },


})