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
    // wait for one second before responding
    setTimeout(() => {
        // return a random number between 1 and 100 as request result
        res.json({result: Math.ceil(Math.random() * 100)})

    }, 10)
})

app.get("/cyclicapi", (req, res) => {
    console.log("NEW =====================")
    // make a post request to "https://bb98-84-232-178-165.ngrok-free.app/testapi". This return a json object like this
    // { "result": 40 }
    // then console log the result
    for(let i = 0; i < 70; i++){
    fetch("https://bb98-84-232-178-165.ngrok-free.app/testapi", {
        method: "POST",
    })
    .then(res => res.json())
    .then(data => console.log("index:",i,"data:",data.result))
}

    res.status(200).end(JSON.stringify({"status":"success","message":"ok"}))
    console.log("end =====================")
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
