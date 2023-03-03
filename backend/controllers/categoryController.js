const Category = require("../models/Category")
const joi = require("joi")
const createSlug = require("../utils/createSlug")

const createCategory = async(req,res) =>{
    try{
        const schema = joi.object({
            category:joi.string().required()
        })

        const { error } = schema.validate(req.body)

        if(error) res.status(400).json(error.details[0].message)

        const { category } = req.body
        await new Category({
            category,
            slug:createSlug(category)
        }).save()

        res.status(200).json('category has been created.')
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const categories = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const category = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateCategory = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const deleteCategory = async(req,res) =>{
    try{

    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { createCategory,categories,category,updateCategory,deleteCategory }