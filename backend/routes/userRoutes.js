const express = require("express")
const router = express.Router()
const {register,login,logout,user} = require('../controllers/userController')
const protect = require("../middleware/authMiddleware")

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/user',protect,user)

module.exports = router