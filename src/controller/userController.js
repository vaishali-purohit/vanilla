const { verfiyUserRequest } = require("../service/userService");

const registerUserRequest = ((req, res, next) => {
  try {
    const { username, userWish } = req.body;
    verfiyUserRequest(username, userWish);
    res.send(`Request has been received successfully`);
  } catch (err) {
    next(err)
  }
})

module.exports = { registerUserRequest }
