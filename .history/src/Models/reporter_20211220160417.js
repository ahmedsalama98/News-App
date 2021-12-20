const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');


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
        phone: {
            type: String,
            required: true,
            unique: true,
            validate: (val) => {
                if (!validator.isPhone(val, 'ar-EG')) {
                    throw new Error('Email Must be Unique')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 4
        },
        image: {
            type: Buffer,
        }


    }, {
        timestamps: { currentTime: () => Date.now() }
    }

)


reporterSchema.pre('save', function(next) {

    if (this.password.isModified()) {
        this.password = bcrypt.hash(this.password, 8)
    }
    next()
})



const Reporter = new mongoose.model(reporterSchema);


module.exports = Reporter;