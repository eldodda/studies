const { Router } = require('express');
const { listGames, findGameById, addNewGame, editGame, delGame } = require('../controllers/gamesCtrl');
const router = Router();

router.get('/', listGames);
router.get('/:id', findGameById);
router.post('/', addNewGame);
router.patch('/:id', editGame);
router.delete('/:id', delGame);

module.exports = router;
