const express = require('express');
const path = require('path');

const app = express();
const publicDirectory = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log('Server is running');
})



app.use(express.static(publicDirectory));

app.get( (req, res) => {
    res.serve('index');
})

