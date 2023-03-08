// cloudinary.js

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

module.exports = cloudinary;

// model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// controller
const Joi = require('joi');
const cloudinary = require('../cloudinary');
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      image: Joi.object({
        path: Joi.string().required(),
        filename: Joi.string().required()
      }).required()
    });

    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.reduce((acc, curr) => {
        acc[curr.context.key] = curr.message;
        return acc;
      }, {});

      return res.status(400).json({ errors });
    }

    const { name, price, quantity, image } = value;

    const { path, filename } = image;

    const result = await cloudinary.uploader.upload(path, { public_id: filename });

    const product = new Product({
      name,
      price,
      quantity,
      imageUrl: result.secure_url
    });

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
// routes
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/', productsController.createProduct);

module.exports = router;
// more controller
const Joi = require('joi');
const cloudinary = require('../config/cloudinary');
const Products = require('../models/productModel');

const productSchemas = Joi.object({
  product: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  imageUrl: Joi.string().required(),
});

exports.createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const result = await cloudinary.uploader.upload(req.body.imageUrl);
    const product = new Product({ 
      product: req.body.product,
      price: req.body.price,
      quantity: req.body.quantity,
      imageUrl: result.secure_url,
    });
    await product.save();

    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
