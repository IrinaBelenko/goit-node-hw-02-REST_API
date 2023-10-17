const nodemailer = require("nodemailer");
const { EMAIL_API_KEY } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "akaiguren@gmail.com",
    pass: EMAIL_API_KEY,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "akaiguren@gmail.com" };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;
