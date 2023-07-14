const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.post("/stockUpdated", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.post("/workerStock", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.listen(process.env.PORT || 3000)