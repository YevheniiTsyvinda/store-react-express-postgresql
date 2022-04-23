const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req,res){
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }
    async getAll(req,res){
        const types = await Type.findAll();
        res.json(types);
    }
    async getById(req,res){
        const {id} = req.query;
        const type = Type.findByPk(id);
        res.json(type);
    }
    async update(req,res){

    }
    async delete(req,res){
        
    }
}

module.exports= new TypeController();