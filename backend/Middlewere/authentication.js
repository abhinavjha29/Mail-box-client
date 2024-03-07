const JWT = require("jsonwebtoken");
const User = require("../Models/userDetailModel");
require("dotenv").config({ path: "./.env" });
const authenticate = async (req, res, next) => {
  try {
    const JWT_PASSWORD = process.env.JWT_PASSWORD;
    const token = req.params.token;

    // const token = req.header("Authorization");
    console.log(token);
    const user = JWT.verify(token, JWT_PASSWORD);

    const response = await User.findById(user.userId);
    console.log(typeof response);
    req.user = response;

    next();
  } catch (err) {
    console.log(err);
    res.status(504);
  }
};

module.exports = { authenticate };
