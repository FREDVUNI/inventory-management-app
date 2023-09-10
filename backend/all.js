// cloudinary.js

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "YOUR_CLOUD_NAME",
  api_key: "YOUR_API_KEY",
  api_secret: "YOUR_API_SECRET",
});

module.exports = cloudinary;

// model
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// controller
const Joi = require("joi");
const cloudinary = require("../cloudinary");
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      image: Joi.object({
        path: Joi.string().required(),
        filename: Joi.string().required(),
      }).required(),
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

    const result = await cloudinary.uploader.upload(path, {
      public_id: filename,
    });

    const product = new Product({
      name,
      price,
      quantity,
      imageUrl: result.secure_url,
    });

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
// routes
const express = require("express");
const productsController = require("../controllers/products");

router.post("/", productsController.createProduct);

module.exports = router;
// more controller
const Joi = require("joi");
const cloudinary = require("../config/cloudinary");
const Products = require("../models/productModel");

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
    res.status(500).send("Server error");
  }
};

const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../model/user");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Delete user from db
    await user.remove();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || user.name,
      avatar: result?.secure_url || user.avatar,
      cloudinary_id: result?.public_id || user.cloudinary_id,
    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
