const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  user,
  loggedIn,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const { protect, authGuard } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", authGuard, user);
router.get("/loggedin", loggedIn);
router.patch("/update-profile", protect, updateProfile);
router.patch("/change-password", protect, changePassword);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:resetToken", resetPassword);

module.exports = router;
