const express = require('express')
require("dotenv").config()
// import express from "express" // means the same
const app = express() // Now we have the app made
const port = process.env.PORT // We can use any of the many virtual ports on a computer ie backend ko listen kahan krna hai

// app.get({konse route pr listen kr rhe ho}, {krna kya hai tb, pass as a callback})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sample', (req, res)=>{
    res.send("sample rubbish data")
})

app.get('/login', (req, res) => {
    res.send("<h1>Sample data</h1>"); // You can send any type of data
})

app.listen(port, () => { // process.env use krna pdta hai
  console.log(`Example app listening on port ${port}`) // aapka server iss port pr listen kr rha hai
})