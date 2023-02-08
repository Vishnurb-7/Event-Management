const express = require('express')
const {check} = require('express-validator')
const providerController = require('../controllers/providerController')

const providerRouter = express.Router()

module.exports= providerRouter;