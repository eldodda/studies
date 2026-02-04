const { listFavs, newFav, delFavById } = require('../services/favoritosServices');

function listFavorites(req, res) {
    try {
        const favos = listFavs();
        res.send(favos)
    } catch (erro) {
        res.status(500)
            .send("Erro interno do servidor.", erro.message);
    }
}

function addNewFav(req, res) {
    try {
        const id = req.params.id;
        newFav(id);
        res.status(201);
    } catch (erro) {
        res.status(404).send(erro.message);
    }
}

function delFav(req, res) {
    try {
        id = req.params.id;
        if (id && Number(id)) {
            delFavById(id);
            res.status(200)
                .send("Jogo removido de Favoritos com sucesso.")
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
    listFavorites,
    addNewFav,
    delFav
}