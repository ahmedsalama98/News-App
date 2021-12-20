const jwt = require('jsonwebtoken')


const Auth = async(req, res, next) => {




    try {

    } catch (error) {
        res.status(401).send({ error: true, message: 'Please Authenticate' })

    }

}



module.exports = Auth;