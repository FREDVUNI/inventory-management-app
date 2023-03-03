const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String, 
        required:[true,"Email address is required"],
        unique:true,
        trim:true,
        match:[
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,"Email address is invalid"
        ]
    },
    password:{
        type: String,
        required:[true,"Password is required"],
        minLength:[6,"Password should atleast be 6 characters long"],
        // maxLength:[23,"Password should not be more than 23 characters long"],
    },
    photo:{
        type:String,
        required:[true,"Photo is required"],
        default:"https://i.ibbco/4pDNDk1/avatar.png"
    },
    phone:{
        type:String,
        default:"+256"
    },
    bio:{
        type:String,
        maxLength:[250,"Bio shouldnot be more than 250 characters long."],
        default:"bio"
    },
    slug:{
        typeof:String
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(this.password,salt)
    this.password = hashPassword

    next()
})

const User = mongoose.model("User",userSchema)
module.exports = User