const express = require("express");
const {
  createCategory,
  categories,
  category,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createCategory);
router.get("/categories", protect, categories);
router.get("/:slug", protect, category);
router.patch("/:id", protect, updateCategory);
router.delete("/:slug", protect, deleteCategory);

module.exports = router;
