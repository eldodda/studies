const { Router } = require('express');
const { listGames, listGamesById } = require('../controllers/gamesCtrl');
const router = Router();

router.get('/', listGames);
router.get('/:id', listGamesById);

module.exports = router;
