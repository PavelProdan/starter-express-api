const express = require('express')
const axios = require('axios');
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

console.log("Starting server")

app.post("/stockUpdated", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.get("/cyclicapi", (req, res) => {
    // get some josn response from a dummy data source and retunr the product id
    res.setHeader('Content-Type', 'application/json')
    res.status(200).end(JSON.stringify({"product_id": "1234"}))
})

app.get('/testcyclic', async (req, res) => {
    try {
      const response = await axios.get('https://dummyjson.com/products/1');
      console.log(response.data); // Log the fetched data to the console
      res.json(response.data); // Send the data as a JSON response to the client
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });


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
