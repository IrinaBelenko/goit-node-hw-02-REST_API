const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const { registerLoginSchema } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");

router.post("/register", validateBody(registerLoginSchema), register);

router.post("/login", validateBody(registerLoginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
