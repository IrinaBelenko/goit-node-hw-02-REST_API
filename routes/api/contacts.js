const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const addSchema = require("../../schemas/contacts");

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(addSchema), addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateBody(addSchema), updateContact);

module.exports = router;
