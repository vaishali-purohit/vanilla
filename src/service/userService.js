const { REQUEST_NOT_STARTED, REQUEST_IN_PROGRESS } = require("../constants/userRequest");
const { saveUserRequest } = require("../database/userRequest");
const { checkUserExist, checkUserEligibleByAge } = require("../utils/userValidation")

const verfiyUserRequest = (username, userWish) => {
  const user = checkUserExist(username);
  const { uid } = user;
  const userProfile = checkUserEligibleByAge(uid);

  const userRequest = {username, address: userProfile.address, userWish, status: REQUEST_IN_PROGRESS}
  saveUserRequest(userRequest)
}

module.exports = { verfiyUserRequest }
