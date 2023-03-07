const express = require("express")
const router = express.Router()
const cloudinary = require("cloudinary")
const multer = require("multer")

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

router.post("/",upload.single("file"),async(req,res)=>{
    try{
        const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:'stock'})
        res.status(200).json({message:'file has been uploaded.',data:result})
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = router