const cloudinary = require('./cloudinary.config');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'stock',
    allowed_formats: ['jpg', 'png'],
    public_id: (req, file) => {
      return `${Date.now()}-${file.originalname}`;
    }
  }
});

module.exports = storage;
