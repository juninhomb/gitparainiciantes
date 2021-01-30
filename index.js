const express = require('express');
const app = express();

app.get('/olamundo', (req, res) => {
    res.status(200).send({message: 'Ola, novo rep clonado'});
})

app.listen(4001, () => {
    console.log('API na porta 4001');
})