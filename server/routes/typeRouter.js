const Router = require('express');
const TypeController = require('../controllers/typeController')
const router = new Router();

router.post('/',TypeController.create);
router.get('/',TypeController.getAll);
router.get('/:id',TypeController.getById);

module.exports = router;