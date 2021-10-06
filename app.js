const express = require('express'); //import express module
const { Mongoose } = require('mongoose');
const app = express(); //run express module and save in variable
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json()); //parses body response

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});

//Connect to DB
mongoose.connect('mongodb+srv://ryuk:NFTlab%40123@cluster0.hifoa.mongodb.net/lab_alerts?retryWrites=true&w=majority', () => 
console.log('connected to DB!')
);
app.listen(3000, () => console.log('listening at 3000')); //Take app var & configure listen port settings


