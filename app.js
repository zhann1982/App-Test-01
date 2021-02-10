const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();


//Middleware
// app.use('/posts', ()=> {
//     console.log('this is middleware running')
// });

//Routes
app.get('/',(req,res)=>{
    res.send('we are on homepage');
});

app.get('/posts',(req,res)=>{
    res.send('we are on posts page');
});

// Connect to db

const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect( err => {
  const collection = client.db("rest").collection("restAPI");
  // perform actions on the collection object
  client.close();
});

//Listening to server
app.listen(3000);