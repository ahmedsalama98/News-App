const express = require('express')

const Route = express.Router()

const reporterController = require('../Controllers/reporter')




Route.get('/test', (req, res) => {

    res.status(200).send('done')
})









module.exports = Route;