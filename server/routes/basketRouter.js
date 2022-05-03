const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController')
const checkRole= require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('USER'),BasketController.create);
router.get('/',checkRole('USER'),BasketController.getAll);
router.post('/remove',checkRole('USER'),BasketController.delete);


module.exports = router;
