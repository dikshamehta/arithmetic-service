const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors()) // accross origin resourse sharing - basically we accept requests from all domains
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithemetic service - Hello world!');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n)+Number(req.params.m)); 
});

app.listen(port)