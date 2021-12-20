const mongoose = require('mongoose')


const newsSchema = new mongoose.Schema({



        title: {
            type: String,
            required: true,
            minlength: 4
        },
        body: {
            type: String,
            required: true,
            minlength: 4
        }


    },

    {
        timestamps: { currentTime: () => Date().now() }
    }



)