const { verfiyUserRequest } = require("../service/userService");
const { validationResult } = require("express-validator");
const BadRequest = require("../exceptions/BadRequest");

const registerUserRequest = async (req, res, next) => {
  try {
    validateRequest(req);
    const { username, userWish } = req.body;
    await verfiyUserRequest(username, userWish);
    res.send(`Request has been received successfully`);
  } catch (err) {
    res.send(err.status, { error: err.message });
  }
};

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequest(error.array()[0].msg);
  }
};

module.exports = { registerUserRequest };
