const express = require('express');
const router = express.Router();
const upload = require('../utils/imageUpload');
const protect = require("../middleware/authMiddleware")
const cloudinary = require("../config/cloudinary.config")
const Product = require("../models/Product")
const joi = require("joi")

// Route for uploading an image
router.post('/create',upload.single('image'),protect,async(req,res) =>{
    try{
        const schema = joi.object({
            product:joi.string().required().max(30).min(2),
            category:joi.string().required(),
            price:joi.string().required(),
            quantity:joi.number().required(),
            description:joi.string().required().max(250).min(15),
            // image: joi.string().required()
        })

        const { error } = schema.validate(req.body)
        if(error) return res.status(400).json(error.details[0].message)

        const { product,category,price,quantity,description,image } = req.body
        const productExists = await Product.findOne({product:product})

        if(productExists) return res.status(400).json('Product already exists')
        const result = await cloudinary.v2.uploader.upload(req.file.path)

        const new_product = new Product({
            product,
            category,
            price,
            quantity,
            description,
            slug:product,
            image:result.secure_url
        }) 

        await new_product.save()
        return res.status(201).json('Product has been saved.')
    }
    catch(error){
        return res.status(500).json(error.message)
    }

});

module.exports = router;
