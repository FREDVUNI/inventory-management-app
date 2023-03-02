const express = require("express")
const router = express.Router()
const {register,login,logout,user, loggedIn, updateProfile, changePassword} = require('../controllers/userController')
const protect = require("../middleware/authMiddleware")

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/user',protect,user)
router.get('/loggedin',loggedIn)
router.patch("/update/profile",protect,updateProfile)
router.patch("/update/change-password",protect,changePassword)

module.exports = router