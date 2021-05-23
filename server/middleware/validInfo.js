const { default: validator } = require("validator");

module.exports = function (req, res, next) {
  const { email, name, password } = req.body;

  if (req.path === "/register") {
    console.log(!email.length);
    if (![email, name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validator.isEmail(email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validator.isEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};
