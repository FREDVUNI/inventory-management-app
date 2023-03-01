const express = require("express")
const router = express.Router()
const {register,login,logout,user, loggedIn} = require('../controllers/userController')
const protect = require("../middleware/authMiddleware")

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/user',protect,user)
router.get('/loggedin',loggedIn)

module.exports = router