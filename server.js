const express = require('express');
const path = require('path');
const $ = require('jquery');
const app = express();



app.use(express.static('public'))

app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/process_get', (req,res)=>{
    const response = {
        name:req.query.name,
        age: req.query.age
    };
    console.log(response);
})

app.listen('8081', () => console.log('App na porta 8081'));