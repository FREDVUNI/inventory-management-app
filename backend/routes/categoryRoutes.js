const express = require("express")
const { createCategory } = require("../controllers/categoryController")
const router = express.Router()
const protect = require("../middleware/authMiddleware")

router.post("/create",protect,createCategory)

module.exports = router