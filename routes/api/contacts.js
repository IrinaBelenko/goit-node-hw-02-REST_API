const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");
const isValidId = require("../../middlewares/isValidId");

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", validateBody(addSchema), addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", isValidId, validateBody(addSchema), updateContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
