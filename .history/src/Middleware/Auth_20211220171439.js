const jwt = require('jsonwebtoken')


const Auth = async(req, res, next) => {




    try {

        const token = req.header('Authorization').replace('Bearer ', '')
        const _id = jwt.verify(token, )


    } catch (error) {

        res.status(401).send({ error: true, message: 'Please Authenticate' })
    }

}



module.exports = Auth;