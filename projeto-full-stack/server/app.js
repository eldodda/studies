const express = require('express');
const cors = require('cors');
const rotaJogos = require( './routes/games.js');
const rotaFavos = require('./routes/favos.js');

const app = express();

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/games', rotaJogos);
app.use('/favoritos', rotaFavos);

const port = 8000;

app.listen(port, () => {
    console.log("Servidor escutando.");
});