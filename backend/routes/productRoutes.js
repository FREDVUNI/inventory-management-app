const express = require('express');
const router = express.Router();
const upload = require('../utils/imageUpload');
const { addProduct } = require('../controllers/productController');
const protect = require("../middleware/authMiddleware")

// Route for uploading an image
router.post('/create',protect, addProduct);

module.exports = router;
