const express = require('express');
const rotaJogos = require( './routes/games.js');
const app = express()
app.use(express.json())

app.use('/games', rotaJogos);

const port = 8000;

app.listen(port, () => {
    console.log("Servidor escutando.")
});