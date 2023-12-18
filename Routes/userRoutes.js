const express = require('express')
const { loginController, registerController, allUseres } = require('../Controllers/userController')
const { addCategory, getCategory } = require('../Controller/categoryController')

const router =  express.Router()

//routers
//POST ||LOGIN
router.post('/login',loginController)

//POST || Register
router.post('/register',registerController)


//for category
router.post('/category',addCategory)

router.get('/getcategory',getCategory)

module.exports = router