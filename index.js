'use strict'

const express = require('express')
const port = 5000

const app = express()

app.get('/', (req , res) => res.send("Hi this is a chatbot"))

app.get('/webhook/', (req, res) => {
    if (req.query['hub.VERIFY_TOKEN'] === "ErickKiarie"){
        res.send(req,query['hub.challenge']) 
    res.send("Wrong token")
    }
})

app.listen(process.env.PORT || port, () => console.log("running on port 5000"))