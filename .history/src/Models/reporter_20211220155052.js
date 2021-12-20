const mongoose = require('mongoose')


const reporterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }


})