const express = require('express');
require('dotenv').config()
require('./DB/db')
const app = express();

const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {


    return res.status(200).send({ message: 'done' })
})


app.listen(port, () => {

    console.log('running')
})