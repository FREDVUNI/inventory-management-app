const multer = require('multer');
const storage = require('../config/cloudinary.storage');

// create multer upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
