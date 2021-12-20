const express = require('express')

const Route = express.Router()




Route.get('/test', (req, res) => {

    res.status(200).send('done')
})









module.exports = Route;