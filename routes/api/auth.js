const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const { registerLoginSchema } = require("../../models/user");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload");

router.post("/register", validateBody(registerLoginSchema), register);

router.post("/login", validateBody(registerLoginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
