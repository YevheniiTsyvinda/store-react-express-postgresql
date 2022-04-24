const Router = require('express');
const checkRole= require('../middleware/checkRoleMiddleware')
const router = new Router();
const BrandController = require('../controllers/brandController')

router.post('/',checkRole('ADMIN'),BrandController.create);
router.get('/',BrandController.getAll);
router.get('/:id',BrandController.getById);

module.exports = router;