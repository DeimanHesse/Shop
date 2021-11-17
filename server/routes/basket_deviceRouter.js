const Router = require('express')
const router = new Router()
const basket_deviceController = require('../controllers/basket_deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), basket_deviceController.create)
router.get('/', basket_deviceController.getAll)
router.delete('/:id', basket_deviceController.deleteItem)

module.exports = router
