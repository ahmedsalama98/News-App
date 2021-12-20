const express = require('express')

const Route = express.Router()

const reporterController = require('../Controllers/reporter')

const Auth = require('../Middleware/Auth')



// create new reporter
Route.post('/reporter', reporterController.create)

// update 

Route.put('/reporter/:id', reporterController.update)

// delete
Route.delete('/reporter/:id', reporterController.deleteFun)

// profile
Route.delete('/profile', reporterController.index)











module.exports = Route;