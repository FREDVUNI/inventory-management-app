const express = require('express');
const router = express.Router();
const upload = require('../utils/imageUpload');
const { addProduct } = require('../controllers/productController');

// Route for uploading an image
router.post('/create', upload.single('image'), addProduct);

module.exports = router;
