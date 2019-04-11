'use strict'

const express = require('express')
const port = 5000

const app = express()

app.get('/', (req , res) => res.send("High this is a chatbot"))

app.listen(process.env.PORT || port, () => console.log("running on port 5000"))