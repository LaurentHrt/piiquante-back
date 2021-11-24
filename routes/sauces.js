var express = require('express');
var router = express.Router();
const saucesCtrl = require('../controllers/saucesController');
const auth = require('../middleware/auth');

router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getSauceById);
router.post('/', auth, saucesCtrl.createSauce);
router.put('/:id', auth, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;
