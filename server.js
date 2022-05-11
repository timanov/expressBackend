const express = require("express");

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    let data = [req.body.id, req.body.task, req.body.isDone]
    res.send(data)
})

app.listen(3000, () => {
    console.log('Server ready')
})