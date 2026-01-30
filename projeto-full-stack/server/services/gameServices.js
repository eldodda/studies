const fs = require('fs');

function listAll(res) {
    return res.send(JSON.parse(fs.readFileSync('games.json')));
}

function findById(id) {
    const games = JSON.parse(fs.readFileSync('games.json'));
    const gameFilter = games.filter(game => game.id === Number(id));
    return gameFilter;
}

function add(newGame) {
    const gameList = JSON.parse(fs.readFileSync('games.json'));
    const newList = [...gameList, newGame];
    fs.writeFileSync('games.json', JSON.stringify(newList))
    return;
}

function edit(diffs, id) {
    let games = JSON.parse(fs.readFileSync('games.json'));
    const index = games.findIndex(game => game.id === Number(id));
    const changes = { ...games[index], ...diffs }
    games[index] = changes;
    fs.writeFileSync('games.json', JSON.stringify(games))
}

function dele(id) {
    let games = JSON.parse(fs.readFileSync('games.json'));
    const newList = games.filter(game => game.id !== Number(id));
    fs.writeFileSync('games.json', JSON.stringify(newList));
}

module.exports = {
    listAll,
    findById,
    add,
    edit,
    dele
}