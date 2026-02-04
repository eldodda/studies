const { Router } = require('express');
const { listFavorites, addNewFav, delFav } = require('../controllers/favsCtrl.js');
const router = Router();

router.get('/', listFavorites);
router.post('/:id', addNewFav);
router.delete('/:id', delFav);

module.exports = router;
