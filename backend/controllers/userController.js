const joi = require("Joi")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const registerUser = async(req,res) =>{
    try{
        const schema = joi.object({
            name:string().min(2).max(25).required(),
            email:string().required().email(),
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
            },process.env.SECRET_KEY)

            res.status(201).json(token)
        }else{
            res.status(400)
            throw new Error("Invalid user data")
        }

    }
    catch(error){

    }
}

module.exports = { registerUser }