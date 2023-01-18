const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const {
  EMAIL_SENDER,
  EMAIL_SUBJECT,
  EMAIL_RECIEVER,
} = require("../constants/email");

const mailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (emailText) => {
  try {
    const mailDetails = {
      from: EMAIL_SENDER,
      to: EMAIL_RECIEVER,
      subject: EMAIL_SUBJECT,
      text: emailText,
    };

    await mailTransporter.sendMail(mailDetails);
  } catch (err) {
    console.log(
      `error occured while sending email for user: ${err}`
    );
    throw err;
  }
};

module.exports = { sendEmail };
