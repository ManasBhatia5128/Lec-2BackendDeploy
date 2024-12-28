const express = require('express')
require("dotenv").config()
// import express from "express" // means the same
const app = express() // Now we have the app made
const port = process.env.PORT // We can use any of the many virtual ports on a computer ie backend ko listen kahan krna hai

const response = fetch("https://api.github.com/users/manasbhatia5128");
let retrivedData = null;
response.then((resp) => {
  if(!resp.ok){
    throw new Error("Error while retriving data")
  }
  else{
    return resp.json();
  }
})
.then((data) => {
  retrivedData = data;
})
.catch((e) => console.log(e));

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

app.get('/github', (req, res) => {
  res.send(retrivedData);
})

app.listen(port, () => { // process.env use krna pdta hai
  console.log(`Example app listening on port ${port}`) // aapka server iss port pr listen kr rha hai
})