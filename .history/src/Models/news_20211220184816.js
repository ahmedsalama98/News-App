const mongoose = require('mongoose')


const newsSchema = new mongoose.Schema({




    },

    {
        timestamps: { currentTime: () => Date().now() }
    }



)