const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const { User } = require("../models/user");

const register = async (req, res) => {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (user) {
  //     throw HttpError(409, "Email already in use");
  //   }
  //   const hashPassword = await bcrypt.hash(password, 10);
  //  const newUser = await User.create({ ...req.body, password: hashPassword });
  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

const login = async (req, res) => {};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
