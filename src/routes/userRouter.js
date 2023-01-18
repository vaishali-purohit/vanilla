const express = require("express");
const router = express.Router();
const { check } = require('express-validator');

const { registerUserRequest } = require("../controller/userController");

router.post(
  "/register-request",
  check("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 1 })
    .withMessage("username can not be empty")
    .isLength({ max: 30 })
    .withMessage("username can not be more than 30 chars long"),
  registerUserRequest
);

module.exports = router;
