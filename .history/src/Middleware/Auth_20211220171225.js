const jwt = require('jsonwebtoken')


const Auth = async(req, res, next) => {




    try {

        const token = req.header('Authentication')
    } catch (error) {

        res.status(401).send({ error: true, message: 'Please Authenticate' })
    }

}



module.exports = Auth;