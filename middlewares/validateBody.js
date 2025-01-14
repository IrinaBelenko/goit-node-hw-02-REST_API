const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const method = req.method;
    const { error } = schema.validate(req.body);
    if (error) {
      const emptyBody = Object.keys(error._original).length === 0;
      if (emptyBody) {
        const message =
          method === "PATCH" ? "missing field favorite" : "missing fields";

        next(HttpError(400, message));
      }

      next(HttpError(400, error.details[0].message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
