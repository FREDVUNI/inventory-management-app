const Product = require("../models/Product")
const joi = require("joi")
const cloudinary = require("../config/cloudinary.config")

const addProduct = async(req,res) =>{
    try{
        const schema = joi.object({
            product:joi.string().required().max(30).min(2),
            category:joi.string().required(),
            price:joi.string().required(),
            quantity:joi.number().required(),
            description:joi.string().required().max(250).min(15),
            image: joi.object({
                fieldname: joi.string().required(),
                originalname: joi.string().required(),
                encoding: joi.string().required(),
                mimetype: joi.string().valid('image/jpeg', 'image/png').required(),
                size: joi.number().max(10 * 1024 * 1024).required(),
                buffer: joi.binary().required()
            }).required()
        })

        const { error } = schema.validate(req.body)
        if(error) return res.status(400).json(error.details[0].message)

        const { product,category,price,quantity,description,image } = req.body
        const productExists = await Product.findOne({product})

        if(productExists) return res.status(400).json('Product already exists')
        const result = await cloudinary.uploader.upload(req.file.path);

        const new_product = new Product({
            product,
            category,
            price,
            quantity,
            description,
            image:result.secure_url
        }) 

        await new_product.save()
        return res.status(200).json('Product has been saved.')
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const getProducts = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const getProduct = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateProduct = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const deleteProduct = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { addProduct,getProducts,getProduct,updateProduct,deleteProduct }