const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');

class Basket_deviceController {
    async create(req, res) {
        const {basketId, deviceId} = req.body
        const basketDevice = await BasketDevice.create({basketId, deviceId})
        return res.json(basketDevice)
    }

    async getAll(req, res) {
        const basketDevice = await BasketDevice.findAll()
        return res.json(basketDevice)
    }

    async deleteItem(req, res) {
        const  id = req.params.id

        const basketDevice = await BasketDevice.destroy({where: {id}})
        console.log(basketDevice)
        return res.json(basketDevice)
    }

}

module.exports = new Basket_deviceController()
