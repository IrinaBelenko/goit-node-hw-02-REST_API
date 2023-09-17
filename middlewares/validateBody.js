const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const emptyBody = Object.keys(error._original).length === 0;
      if (emptyBody) {
        next(HttpError(400, "missing fields"));
      }

      const message = `missing required ${error.details[0].path[0]} field`;
      next(HttpError(400, message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
