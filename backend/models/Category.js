const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required: [true,"category is required"]
    },
    slug:{
        type:String,
    }
},{timestamps:true})

const Category = mongoose.model("Category",categorySchema)

module.exports = Category