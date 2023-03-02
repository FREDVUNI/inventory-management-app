const User = require("../models/User")
const jwt = require("jsonwebtoken")

const protect = async(req,res) =>{
    try{
        const token = req.coookies.token
        if(!token){
            res.status(401)
            throw new Error("You\'re not authorized")
        }

        const verified = jwt.verify(token,process.env.SECRET_KEY)

        const user = await User.findById(verified.id).select("-password")

        if(!user){
            res.status(401)
            throw new Error("You\'re not authorized")
        }
        req.user = user
        next()
    }
    catch(error){
        res.status(401)
            throw new Error("You\'re not authorized")
    }
}

module.exports = protect