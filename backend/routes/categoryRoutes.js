const express = require("express")
const { createCategory, categories, category, updateCategory } = require("../controllers/categoryController")
const router = express.Router()
const protect = require("../middleware/authMiddleware")

router.post("/create",protect,createCategory)
router.get("/categories",protect,categories)
router.get("/:slug",protect,category)
router.patch("/:id",protect,updateCategory)

module.exports = router