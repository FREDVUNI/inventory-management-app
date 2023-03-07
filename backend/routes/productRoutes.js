const express = require('express')
const router = express.Router()
const cloudinary = require("cloudinary")
const multer = require("multer")
const joi = require("joi")
const Product = require("../models/Product")
const protect = require("../middleware/authMiddleware")

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

const storage = multer.diskStorage({})
const filter = (req,file,cb) =>{
    if(file.mimetype==="image/jpg" || file.mimetype==="image/png"){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const upload = multer({storage,filter})

router.post("/create",protect,upload.single("image"),async(req,res)=>{
    try{
        const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:'stock'})
        const schema = joi.object({
            product:joi.string().required().max(30).min(2),
            category:joi.string().required(),
            price:joi.string().required(),
            quantity:joi.number().required(),
            description:joi.string().required().max(250).min(15),
        })

        const { error } = schema.validate(req.body)
        if(error) return res.status(400).json(error.details[0].message)

        const { product,category,price,quantity,description } = req.body
        const productExists = await Product.findOne({product})

        if(productExists) return res.status(400).json('Product already exists')

        const new_product = new Product({
            product,
            category,
            price,
            quantity,
            description,
            image: result.url
        }) 

        await new_product.save()
        return res.status(200).json('Product has been saved.')
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = router
