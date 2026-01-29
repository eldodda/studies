const fs = require('fs');

function listAllGames(res) {
    return res.send(JSON.parse(fs.readFileSync('games.json')));
}

function findGameById(id) {
    const games = JSON.parse(fs.readFileSync('games.json'));
    const gameFilter = games.filter(game => game.id === Number(id));
    return gameFilter;
}

module.exports = {
    listAllGames,
    findGameById
}