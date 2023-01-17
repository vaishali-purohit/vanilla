const express = require('express')
const router = express.Router()

const {
    registerUserRequest
} = require('../controller/userController')

router.post('/register-request', registerUserRequest)

module.exports = router