const multer = require("multer")
const cloudinary = require("cloudinary")

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
})

// configure Cloudinary storage for multer
const storage = multer.diskStorage({})

module.exports = storage;
