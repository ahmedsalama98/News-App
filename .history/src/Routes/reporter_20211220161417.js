const express = require('express')

const Route = express.Router()

const reporterController = require('../Controllers/reporter')




Route.get('/test', reporterController.create)









module.exports = Route;