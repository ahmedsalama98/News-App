const express = require('express');
require('dotenv').config()
require('./DB/db')
const app = express();

const port = 5000;

const reporterRoutes = require('./Routes/reporter')
app.use(express.json())
app.use(reporterRoutes)


app.listen(port, () => {

    console.log('running')
})