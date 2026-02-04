const fs = require('fs');

function listFavs(res) {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function delFavById(id) {
    const games = JSON.parse(fs.readFileSync('favoritos.json'));
    const favsFilter = games.filter(fav => fav.id !== Number(id));
    fs.writeFileSync('favoritos.json', JSON.stringify(favsFilter));
    return;
}

function newFav(id) {
    const games = JSON.parse(fs.readFileSync('games.json'));
    const favs = JSON.parse(fs.readFileSync('favoritos.json'));

    const favGame = games.find(game => Number(game.id) === Number(id));

    if (favGame) {
        const jaExiste = favs.find(fav => Number(fav.id) === Number(id));
        if (!jaExiste) {
            const newFavs = [...favs, favGame];
            fs.writeFileSync('favoritos.json', JSON.stringify(newFavs, null, 2));
            console.log(`Sucesso: Jogo ${id} adicionado.`);
        } else {
            console.log("Aviso: Jogo já está nos favoritos.");
        }
    } else {
        console.error(`ERRO: Jogo com ID ${id} não encontrado no games.json!`);
        console.log("IDs disponíveis no games.json:", games.map(g => g.id));
        
        throw new Error("Jogo não encontrado no banco de dados.");
    }
}

module.exports = {
    listFavs,
    delFavById,
    newFav
}