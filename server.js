const express = require('express');
const path = require('path');
const fs = require('fs');
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
    parsedAge = parseInt(response.age);
    const database = require('./database/database.json');
    if(!isNaN(parsedAge) && parsedAge > 17){
        database.push(response);
        fs.writeFile('./database/database.json',JSON.stringify(database), function(err){
            if(err){
                console.log(err);
            }
        });
    }
    console.log(response);
})

app.get('/getDatabase', (req,res)=>{
    const database = require('./database/database.json');
    console.log(database);
    res.end(JSON.stringify(database));
})

app.listen('8081', () => console.log('App na porta 8081'));