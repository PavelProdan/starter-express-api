const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

console.log("Starting server")

app.post("/stockUpdated", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.post("/testapi", (req, res) => {
    console.log("I got a request")
    // wait for one second before responding
    setTimeout(() => {
        // return a random number between 1 and 100 as request result
        console.log(req.body)
        res.json({result: Math.ceil(Math.random() * 100)})

    }, 10)
})

app.get("/cyclicapi", (req, res) => {
    
    for(let i = 0; i < 100; i++){
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json));

    }
    

    res.status(200).end(JSON.stringify({"status":"success","message":"ok"}))
})


app.post("/workerStock", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.post("/fireworq", (req, res) => {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).end(JSON.stringify({"status":"success","message":"ok"}))
})

app.post("/fail-fireworq", (req, res) => {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).end(JSON.stringify({"status":"failure","message":"temp fail"}))
})

app.listen(process.env.PORT || 3000)
