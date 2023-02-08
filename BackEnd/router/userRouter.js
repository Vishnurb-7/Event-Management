const express = require('express')
const {check} = require('express-validator')

const userController = require('../controllers/userController')
const userRouter = express.Router()

module.exports= userRouter;