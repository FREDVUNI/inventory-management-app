const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
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
            /^(([^<>()[\]\\.,;:s@"]+(\.[^<>()[\]\\.,;:\s@"])))/,"Email address is invalid"
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
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
module.exports = User