const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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
                if (!validator.isMobilePhone(val, 'ar-EG')) {
                    throw new Error('UnValid Phone Number')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 4
        },
        tokens: [{
            type: String,
        }],
        image: {
            type: Buffer,
        }


    }, {
        timestamps: { currentTime: () => Date.now() }
    }

)


reporterSchema.pre('save', async function(next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

reporterSchema.methods.generateToken = async function() {

    const reporter = this;
    const token = jwt.sign({ _id: reporter._id }, process.env.JWT_SECRET);

    reporter.tokens = reporter.tokens.concat(token)

    await reporter.save();

    return token;




}



const Reporter = new mongoose.model('Reporter', reporterSchema);


module.exports = Reporter;