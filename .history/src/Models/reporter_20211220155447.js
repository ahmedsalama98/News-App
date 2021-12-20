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
            if (!validator.isEmail(val)) {
                throw new Error('Email Must be Unique')
            }
        }

    },
    name: {
        type: String,
        required: true,
        unique: true,
        validate: (val) => {
            if (!validator.isEmail(val)) {
                throw new Error('Email Must be Unique')
            }
        }
    },
    name: {
        type: String,
        required: true
    },


})