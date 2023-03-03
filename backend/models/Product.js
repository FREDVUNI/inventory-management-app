const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product:{
        type:String,
        required:[true,"Product is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    price:{
        type:String,
        required:[true,"Price is required"]
    },
    quantity:{
        type:Number,
        required:[true,"Quantity is required"]
    },
    description:{
        type:String,
        required:[true,"Product details is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    slug:{
        type:String
    }
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product