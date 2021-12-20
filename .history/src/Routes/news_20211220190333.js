const express = require('express')

const Route = express.Router()

const newsController = require('../Controllers/news')



Route.get('/do', function(req, res) {


    res.send('do')
})










module.exports = Route;