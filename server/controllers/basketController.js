const { Basket, BasketDevice,Device } = require("../models/models");

class BasketController{

    async create(req,res){
        const {id} = req.user;
        const {deviceId} = req.body;
        const basket = await Basket.findOne({where:{userId: id}});
        const basketId = basket.dataValues.id;
        
        const result = await BasketDevice.create({basketId:basketId,deviceId:deviceId});
        return res.json(result);
    }

    async getAll(req,res){
        const {id} = req.user;
        
        const basket = await Basket.findOne({where:{userId: id}});
        const basketId = basket.dataValues.id;
        const basketItems = await BasketDevice.findAll({where: {basketId: basketId },
            include:[{model:Device}]})
        return res.json(basketItems);
    }

    async delete(req,res){
        const {id} = req.user;
        const {basketDeviceId} = req.body;
        
        const basketItems = await BasketDevice.destroy({where: {id: basketDeviceId }})
        return res.json(basketItems);
    }
}

module.exports = new BasketController();