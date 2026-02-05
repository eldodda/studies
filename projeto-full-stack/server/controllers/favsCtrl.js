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
        const resultado = newFav(id);
        console.log("Sucesso no serviço:", resultado);
        res.status(resultado.status)
            .json(resultado);
    } catch (erro) {
        console.error("Erro no controller:", erro.message);
        res.status(500).json({ message: erro.message });
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