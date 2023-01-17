const { getAgeByBirthDate } = require("./helper");
const { USER_RESTRICTED_AGE } = require("../constants/user");

const users = require("../data/user_data.json");
const userProfiles = require("../data/user_profile_data.json");
const UserNotFound = require("../exceptions/UserNotFound");
const UserProfileNotFound = require("../exceptions/UserProfileNotFound");
const UserAgeExceed = require("../exceptions/UserAgeExceed");


const checkUserExist = (userName) => {
  const index = users.findIndex(user => user.username === userName.toLowerCase())
  if (index === -1) {
    throw new UserNotFound(`No match for username: ${userName}`);
  }
  return users[index];
}

const checkUserEligibleByAge = (userId) => {
  const index = userProfiles.findIndex(u => u.userUid === userId);
  if (index === -1) {
    throw new UserProfileNotFound(`No user profile match for username: ${userId}`);
  }

  const currentAge = getAgeByBirthDate(userProfiles[index].birthdate);
  if (currentAge > USER_RESTRICTED_AGE) {
    throw new UserAgeExceed(`User age is more than 10 years, userId: ${userId}`);
  }

  return userProfiles[index];
}

module.exports = { checkUserExist, checkUserEligibleByAge }
