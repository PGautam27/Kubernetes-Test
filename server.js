const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Hello, World!');
 });

 app.listen(port);