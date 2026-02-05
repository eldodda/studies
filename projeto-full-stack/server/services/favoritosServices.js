const fs = require('fs');

function listFavs(res) {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function newFav(id) {
    const games = JSON.parse(fs.readFileSync('games.json'));
    const favs = JSON.parse(fs.readFileSync('favoritos.json'));

    const favGame = games.find(game => Number(game.id) === Number(id));

    if (favGame) {
        const jaExiste = favs.find(fav => Number(fav.id) === Number(id));
        if (!jaExiste) {
            const newFavs = [...favs, favGame];
            fs.writeFileSync('favoritos.json', JSON.stringify(newFavs, null, 3));
            return { status: 201, message: `Sucesso: Jogo ${id} adicionado.` }; 
        } else {
            return { status: 400, message: "Aviso: Jogo já está nos favoritos." };
        }
    } else {
        throw new Error("Jogo não encontrado no banco de dados.");
    }
}

function delFavById(id) {
    const games = JSON.parse(fs.readFileSync('favoritos.json'));
    const favsFilter = games.filter(fav => fav.id !== Number(id));
    fs.writeFileSync('favoritos.json', JSON.stringify(favsFilter, null, 3));
    return;
}


module.exports = {
    listFavs,
    delFavById,
    newFav
}