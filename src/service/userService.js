const {
  REQUEST_NOT_STARTED,
  REQUEST_IN_PROGRESS,
} = require("../constants/userRequest");
const { saveUserRequest } = require("../database/userRequest");
const {
  checkUserExist,
  checkUserEligibleByAge,
} = require("../utils/userValidation");
const Users = require("../models/Users");
const UserData = require("../models/UserData");
const UserRequest = require("../models/UserRequest");

const getUsers = async () => {
  try {
    const response = await Users.find();
    return response;
  } catch (e) {
    console.log(e);
  }
};

const getUserData = async () => {
  try {
    const response = await UserData.find();
    return response;
  } catch (e) {
    console.log(e);
  }
};

const getUserRequestByStatus = async (status) => {
  try {
    const response = await UserRequest.find({ status });
    return response;
  } catch (e) {
    console.log(e);
  }
};

const bulkUpdateUserRequestByStatus = async (data) => {
  try {
    const response = await UserRequest.bulkWrite(data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const verfiyUserRequest = async (username, userWish) => {
  const userList = await getUsers();
  const user = checkUserExist(username, userList);
  const { uid } = user;
  const userData = await getUserData();
  const userProfile = checkUserEligibleByAge(uid, userData);

  const userRequest = {
    username,
    address: userProfile.address,
    userWish,
    status: REQUEST_IN_PROGRESS,
  };
  await saveUserRequest(userRequest);
};

module.exports = {
  verfiyUserRequest,
  getUsers,
  getUserData,
  getUserRequestByStatus,
  bulkUpdateUserRequestByStatus,
};
