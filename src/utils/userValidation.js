const { getAgeByBirthDate } = require("./helper");
const { USER_RESTRICTED_AGE } = require("../constants/user");

const UserNotFound = require("../exceptions/UserNotFound");
const UserProfileNotFound = require("../exceptions/UserProfileNotFound");
const UserAgeExceed = require("../exceptions/UserAgeExceed");

const checkUserExist = (userName, userList) => {
  const index = userList.findIndex(
    (user) => user.username === userName.toLowerCase()
  );

  if (index === -1) {
    throw new UserNotFound(
      `No match for username: ${userName}, Please register yourself first.`
    );
  }
  return userList[index];
};

const checkUserEligibleByAge = (userId, userProfiles) => {
  const index = userProfiles.findIndex((u) => u.userUid === userId);

  if (index === -1) {
    throw new UserProfileNotFound(
      `No user profile match for username, Please register yourself first.`
    );
  }

  const currentAge = getAgeByBirthDate(userProfiles[index].birthdate);
  if (currentAge > USER_RESTRICTED_AGE) {
    throw new UserAgeExceed(`User age is more than 10 years!`);
  }

  return userProfiles[index];
};

module.exports = { checkUserExist, checkUserEligibleByAge };
