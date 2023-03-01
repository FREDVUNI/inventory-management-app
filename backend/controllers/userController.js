const joi = require("Joi")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

const generateToken = (id) =>{
    return jwt.sign({
        id
    },process.env.SECRET_KEY,{expiresIn:"1 day"})
}

const register = async(req,res) =>{
    try{
        const schema = joi.object({
            name:string().min(2).max(25).unique().required(),
            email:string().required().unique().email(),
            password:string().min(6).required()
        })

        const { error } = schema.validate(req.body)
        if(error) res.status(400).json(error.details[0].message)

        const users = User.findOne({email:req.body.email})
        if(users) res.status(400).json('user with this email already exists.')

        const new_user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await new_user.save()
        if(user){
            const token = jwt.sign({
                _id:user._id,
                name:user.name,
                email:user.email,
                bio:user.bio,
                phone:user.phone,
                photo:user.photo,
            },process.env.SECRET_KEY,{expiresIn:"1 day"})
            res.cookie("token",token,{
                path:"/",
                httpOnly:true,
                expires:new Date(Date.now() + 1000 * 86400),
                sameSite: "none",
                scure:true
            })
            res.status(201).json(token)
        }else{
            res.status(400)
            throw new Error("Invalid user data")
        }

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const login = async(req,res) =>{
    try{
        const schema = joi.object({
            email:joi.string().email().required(),
            password:joi.string().required()
        })

        const { error } = schema.validate(req.body)
        if(error) res.status(400).json(error.details[0].message)

        const user = await User.findOne({email:req.body.email})

        if(!user) res.status(400).json('wrong email password combination')

        const verifyPassword = await bcrypt.compare(req.body.password,user.password)

        if(!verifyPassword) res.status(400).json('wrong email password combination')

        if(user){
            const token = jwt.sign({
                _id:user._id,
                email:user.email,
            },process.env.SECRET_KEY,{expiresIn:"1 day"})
    
            res.cookie("token",token,{
                path:"/",
                httpOnly:true,
                expires:new Date(Date.now() + 1000 * 86400),
                sameSite: "none",
                scure:true
            })
            res.status(200).json(token)
        }else{
            res.status(400)
            throw new Error("wrong email password combination")
        }
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { register,login }