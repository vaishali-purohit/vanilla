const cron = require('node-cron');
const { REQUEST_IN_PROGRESS, REQUEST_COMPLETED } = require('../constants/userRequest');
const { userRequests } = require('../database/userRequest');
const { sendEmail } = require('../notifications/email');

const processRequests = () => {
  console.log(userRequests);
  let emailText = '';
  for(const userRequest of userRequests) {
    if(userRequest.status === REQUEST_IN_PROGRESS){
      emailText = emailText + `username: ${userRequest.username}\naddress: ${userRequest.address}\nwish: ${userRequest.userWish}\n\n`;
      userRequest.status = REQUEST_COMPLETED;
    }
  }

  if(emailText.length > 0){
    sendEmail(emailText);
    console.log(emailText);
  }
}

const pendingUserRequestSchedular = cron.schedule('*/15 * * * * *', processRequests, {
  scheduled: false
});

module.exports = pendingUserRequestSchedular;
