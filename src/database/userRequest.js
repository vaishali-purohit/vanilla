const userRequests = [];

const saveUserRequest = (request) => {
  userRequests.push(request);
}

module.exports = { saveUserRequest, userRequests }
