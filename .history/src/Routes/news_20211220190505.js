const express = require('express')

const Route = express.Router()

const newsController = require('../Controllers/news')


const Auth = require('../Middleware/Auth')




// create new reporter
Route.post('/news', newsController.create)

// update 

Route.put('/news/:id', newsController.update)

// delete
Route.delete('/news/:id', newsController.deleteFun)

// profile
Route.get('/news', Auth, newsController.index)









module.exports = Route;