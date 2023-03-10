const User = require("../models/User")
const jwt = require("jsonwebtoken")

const protect = async(req,res,next) =>{
    try{
        const token = req.cookies.token
        if(!token){
            res.status(401).json("You\'re not authorized ...")
            // throw new Error("You\'re not authorized")
        }

        const verified = jwt.verify(token,process.env.SECRET_KEY)

        const user = await User.findById(verified._id).select("-password")

        if(!user){
            res.status(401).json("You\'re not authorized")
            // throw new Error("You\'re not authorized")
        }
        req.user = user
        next()
    }
    catch(error){
        res.status(401).json("You\'re not authorized")
            // throw new Error("You\'re not authorized")
    }
}

module.exports = protect