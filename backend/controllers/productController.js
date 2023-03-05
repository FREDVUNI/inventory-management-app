const Product = require("../models/Product")
const joi = require("joi")

const create = async(req,res) =>{
    try{
        const schema = joi.object({
            product:joi.string().required().max(30).min(2),
            category:joi.string().required(),
            price:joi.string().required(),
            quantity:joi.price().required(),
            description:joi.string().required().max(250).min(15),
            image:joi.string().required(),
        })

        const { error } = schema.validate(req.body)
        if(error) return res.status(400).json(error.details[0].message)

        const { product,category,price,quantity,description,image } = req.body
        const productExists = await Product.findOne({product})

        if(productExists) return res.status(400).json('Product already exists')

        const new_product = await new Product({
            product,
            category,
            price,
            quantity,
            description,
            image:image
        }) 

        const store = new_product.save()
        return res.status(200).json(store)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const products = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const product = async(req,res) =>{
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

module.exports = { create,products,product,updateProduct,deleteProduct }