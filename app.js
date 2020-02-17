const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const secret = require('./secret/MongoDb'); 

const stuffRoute = require('./routes/stuff'); 
const userRoute = require('./routes/user'); 

const app = express();

mongoose.connect(secret,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoute); 
app.use('/api/auth', userRoute); 


module.exports = app;

