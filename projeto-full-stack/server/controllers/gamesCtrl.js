const { listAllGames, findGameById } = require('../services/gameServices');

function listGames(req, res) {
    try {
        const games = listAllGames(res);
        res.send(games)
    } catch (erro) {
        res.status(500).send("Erro interno do servidor.", erro.message);
    }
}

function listGamesById(req, res) {
    try {
        const id = req.params.id;
        const game = findGameById(id);
        res.send(game);
    } catch (erro) {
        res.status(500)
        .send(erro.message);
    }
}

module.exports = {
    listGames,
    listGamesById
}