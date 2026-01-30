const { listAll, findById, add, edit, dele } = require('../services/gameServices');

function listGames(req, res) {
    try {
        const games = listAll(res);
        res.send(games)
    } catch (erro) {
        res.status(500).send("Erro interno do servidor.", erro.message);
    }
}

function findGameById(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const game = findById(id);
            res.send(game);
        } else {
            res.status(422)
                .send("O id inserido é inválido.")
        }
    } catch (erro) {

    }
    res.status(500)
        .send(erro.message);
}


function addNewGame(req, res) {
    try {
        const newGame = req.body;
        if (!req.body.nome || !req.body.id) {
            res.status(422)
                .send("Os campos 'id' e 'nome' são obrigatórios");
        } else {

            add(newGame);
            res.status(201)
                .send("Jogo adicionado com sucesso.")
                .send(JSON.parse(newGame));

        }
    } catch (erro) {
        res.status(500)
            .send(erro.message);
    }
}

function editGame(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            edit(body, id)
            res.status(201)
                .send("Jogo editado com sucesso.");
        } else {
            res.status(422)
                .send("O id inserido é inválido.")
        }
    } catch (erro) {
        res.status(500)
            .send(erro.message);
    }
}

function delGame(req, res) {
    try {
        id = req.params.id;
        if (id && Number(id)) {
            dele(id);
            res.status(200)
                .send("Jogo removido com sucesso.")
        } else {
            res.status(422)
                .send("O id inserido é inválido.")
        }
    } catch (erro) {
        res.status(500)
            .send(erro.message);
    }
}

module.exports = {
    listGames,
    findGameById,
    addNewGame,
    editGame,
    delGame
}