const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const { registerLoginSchema } = require("../../models/user");
const { register, login } = require("../../controllers/auth");

router.post("/register", validateBody(registerLoginSchema), register);

router.post("/login", validateBody(registerLoginSchema), login);

module.exports = router;
