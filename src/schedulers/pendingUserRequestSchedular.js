const cron = require("node-cron");
const { CRON_SHCEDULER } = require("../constants/email");
const {
  REQUEST_IN_PROGRESS,
  REQUEST_COMPLETED,
} = require("../constants/userRequest");
const { sendEmail } = require("../notifications/email");
const {
  getUserRequestByStatus,
  bulkUpdateUserRequestByStatus,
} = require("../service/userService");

const processRequests = async () => {
  try {
    let emailText = "";
    const data = [];
    const userRequests = await getUserRequestByStatus(REQUEST_IN_PROGRESS);

    for (const userRequest of userRequests) {
      if (userRequest.status === REQUEST_IN_PROGRESS) {
        emailText =
          emailText +
          `username: ${userRequest.username}\naddress: ${userRequest.address}\nwish: ${userRequest.userWish}\n\n`;
        data.push({
          updateOne: {
            filter: { _id: userRequest._id },
            update: { $set: { status: REQUEST_COMPLETED } },
          },
        });
      }
    }

    if (emailText.length > 0) {
      console.log(emailText);
      await sendEmail(emailText);
      await bulkUpdateUserRequestByStatus(data);
    }
  } catch (err) {
    console.log(err);
  }
};

const pendingUserRequestSchedular = cron.schedule(
  CRON_SHCEDULER,
  processRequests,
  {
    scheduled: false,
  }
);

module.exports = pendingUserRequestSchedular;
