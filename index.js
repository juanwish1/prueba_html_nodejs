const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3033;
const path = require('path');
app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
    
})

app.use('/', express.static('public', {redirect: false}));
app.use('*', (req, res)=>{
    res.sendFile(path.resolve('./public/index.html'))
})