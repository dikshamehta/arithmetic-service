const express = require('express')
const cors = require('cors')
const {add} = require("./arithmetica");

const app = express();
app.use(cors()) // accross origin resourse sharing - basically we accept requests from all domains
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithemetic service - Hello world!!');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum  = add(n,m);
        res.json(sum);
});

app.listen(port)