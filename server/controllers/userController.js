const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,Basket}= require('../models/models')

const generateJwt = (id,email, role) =>{
  return  jwt.sing(
        {id,email,role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
        );
    
}

class UserController {
    async registration(req,res){
        const {email, password, role} =req.body;
        if(!email || !password){
            return next(ApiError.badRequest('Password or email is incorrect'))
        }
        const candidate = await User.findOne({where:{email}});
        if(candidate){
            return next(ApiError.badRequest('User not found'));
        }
        const hashPassword = await bcrypt.hash(password, 8);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id,user.email,user.role);
        return res.json({token});
    }
    async login(req,res){
        const {email,password} = req.body;
        const user = await User.findAll({where:{email}})
        if(!user){
            return next(ApiError.internal('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal('Wrong password specified'))
        }
        const token = generateJwt(user.id, user.email, user.role);
        res.json({token});
    }
    async check(req,res,next){
        const {id} = req.query;
        if (!id){
            next(ApiError.badRequest('id not set'))
        }
        res.json(id);
    }
}

module.exports= new UserController();