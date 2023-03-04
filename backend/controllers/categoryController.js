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

        const categoryExists = await Category.findOne({category})
        if(categoryExists) return res.status(409).json(`category already exists.`)

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
        const categories = await Category.find({})
        res.status(200).json(categories)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const category = async(req,res) =>{
    try{
        const slug = req.params.slug
        if(!slug) return res.status(404).json('category was not found.')

        const category = await Category.findOne({slug})
        if(!category) return res.status(404).json('category was not found.')

        res.status(200).json(category)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateCategory = async(req,res) =>{
    try{
        const schema = joi.object({
            category:joi.string().required()
        })

        const { error } = schema.validate(req.body)

        if(error) res.status(400).json(error.details[0].message)

        const id = req.params.id

        const { category } = req.body
        const categories = await Category.findById(id)
        
        if(id){
            const { category } = categories
            categories.category = req.body.category || category;
            categories.slug = createSlug(categories.category);

            const update_category = await categories.save()

            res.status(201).json(update_category)
        }else{
            return res.status(404).json('category was not found.')
        }
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const deleteCategory = async(req,res) =>{
    try{
        const slug = req.params.slug
        if(!slug) return res.status(404).json('category was not found.')

        const category = await Category.findOne({slug})
        if(!category) return res.status(404).json('category was not found.')

        category.deleteOne()

        res.status(200).json('category has been deleted.')
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = { createCategory,categories,category,updateCategory,deleteCategory }