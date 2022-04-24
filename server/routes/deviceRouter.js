const Router = require('express');
const checkRole= require('../middleware/checkRoleMiddleware')
const router = new Router();
const DeviceController = require('../controllers/deviceController')

router.post('/',checkRole('ADMIN'),DeviceController.create);
router.get('/',DeviceController.getAll);
router.get('/:id',DeviceController.getById);


module.exports = router;