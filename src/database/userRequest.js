const UserRequest = require("../models/UserRequest");

const saveUserRequest = async (request) => {
  const userDetails = new UserRequest(request);
  await userDetails.save();
};

module.exports = { saveUserRequest };
