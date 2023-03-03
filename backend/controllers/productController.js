const Product = require("../models/Product")
const joi = require("joi")

const create = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const products = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const product = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateProduct = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const deleteProduct = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { create,products,product,updateProduct,deleteProduct }