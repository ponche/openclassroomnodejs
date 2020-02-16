const express = require('express'); 

const app = express(); 

app.use((req, res) => {
    res.json({ message: 'Votre requete à bien été reçue :'}); 
});

module.exports = app; 

