const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.post('/mobileExist',userController.mobileExist)
userRouter.post('/signup',userController.signup)
userRouter.post('/login',userController.login)

module.exports= userRouter;