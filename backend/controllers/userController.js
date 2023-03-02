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

const logout = async(req,res) =>{
    res.cookie("token","",{
        path:"/",
        httpOnly:true,
        expires:new Date(0),
        sameSite: "none",
        scure:true
    })
    res.status(200).json('You have been logged out.')
}

const user = async(req,res) =>{
    try{
        const user = await User.findById(req.user._id)

        if(!user) res.status(400).json(`user was not found`)

        const { _id,name,email,photo,phone,bio } = user

        if(user){
            res.status(200).json({
                _id,
                name,
                email,
                photo,
                phone,
                bio
            })
        }

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const loggedIn = async(req,res) =>{
    try{
        const token = req.cookies.token

        if(!token){
            return res.json(false)
        }

        const verified = jwt.verify(token,process.env.SECRET_KEY)
        if(verified){
            return res.json(false)
        }
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateProfile = async(req,res) =>{
    try{
        const schema = joi.object({
            name:string().min(2).max(25).unique().required(),
            email:string().required().unique().email(),
            password:string().min(6).required()
        })

        const { error } = schema.validate(req.body)
        if(error) res.status(400).json(error.details[0].message)

        const user = await User.findById(req.user._id)

        if(user){
            const { name,email,bio,photo,phone } = user
            user.email = email,
            user.name = req.body.name || name;
            user.photo = req.body.photo || photo;
            user.phone = req.body.phone || phone;
            user.bio = req.body.bio || bio;

            const update_user = await user.save()

            const updated = jwt.sign({
                _id:update_user._id,
                name:update_user.name,
                email:update_user.email,
                photo:update_user.photo,
                phone:update_user.phone,
                bio:update_user.bio,
            },process.env.SECRET_KEY) 

            res.json(updated)
        }else{
            res.status(404)
                throw new Error("user was not found.")
        }
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const changePassword = async(req,res) =>{
    try{
        const schema = joi.object({
            password:string().min(6).required()
        })

        const { error } = schema.validate(req.body)
        if(error) res.status(400).json(error.details[0].message)

        const user = await User.findById(req.user._id)

        if(!user){
            res.status(400)
            throw new Error("user was not found")
        }

        const { password, oldPassword } = req.body

        if(!password || !oldPassword){
            res.status(400)
            throw new Error("old and new password fields are required")
        }

        const checkPassword = await bcrypt.compare(oldPassword,user.password)

        if(!checkPassword) res.status(400).json('The password you entered doesnot match your current password.')

        if(user && checkPassword){
            user.password = password
            await user.save()
            res.status(200).json('Password has been changed.')
        }else{
            res.status(400)
            throw new Error("The password you entered doesnot match your current password.")
        }

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const forgotPassword = async() =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { register,login,logout,user,loggedIn,updateProfile,changePassword,forgotPassword }