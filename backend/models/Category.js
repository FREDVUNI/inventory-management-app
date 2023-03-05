const mongoose = require("mongoose")
const createSlug = require("../utils/createSlug")

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required: [true,"category is required"]
    },
    slug:{
        type:String,
    }
},{timestamps:true})

categorySchema.pre("save",async function(next){
    // if(!this.isModified("slug")){
    //     return next()
    // }

    const slug = createSlug(this.slug)
    this.slug = slug
    next()
})

const Category = mongoose.model("Category",categorySchema)

module.exports = Category