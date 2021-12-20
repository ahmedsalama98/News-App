const express = require('express');
require('dotenv').config()
require('./DB/db')
const app = express();

const port = 5000;

const reporterRoutes = require('./Routes/reporter')
app.use(express.json())
app.use(reporterRoutes)


app.get('/', (req, res) => {


    return res.status(200).send({ message: 'done' })
})


app.listen(port, () => {

    console.log('running')
})