const {Brand} = require('../models/models')


class BrandController {
    async create(req,res){
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }
    async getAll(req,res){
        const brands = await Brand.findAll();
        res.json(brands);
    }
    async getById(req,res){
        
    }
    async update(req,res){
        
    }
    async delete(req,res){
        
    }
}

module.exports= new BrandController();