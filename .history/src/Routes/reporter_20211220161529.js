const express = require('express')

const Route = express.Router()

const reporterController = require('../Controllers/reporter')



// create new reporter
Route.post('/reporter', reporterController.create)









module.exports = Route;