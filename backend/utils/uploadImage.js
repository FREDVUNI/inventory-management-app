const cloudinary = require("cloudinary")
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "stock",
  },
});

const upload = multer({ storage: storage });

const uploadImage = async(req,res) =>{
    try{
        const data = {
            imageUrl: req.file,
        }

        const result = await cloudinary.v2.uploader.upload(data.imageUrl)
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json(error.message)
    }
}

module.exports = {uploadImage}