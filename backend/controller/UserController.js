const User = require("../Models/userDetailModel");
const JWT = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });

const generateToken = async (id) => {
  try {
    return JWT.sign({ userId: id }, process.env.JWT_PASSWORD);
  } catch (err) {
    console.log(err);
  }
};
const userSignup = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const response = await User.create({ email: email, password: password });
    console.log(response);
    if (response) {
      res.status(202).json({ msg: "Sign up successful", response });
    }
  } catch (err) {
    res.status(501).json({ msg: "Internal SERVER error" });
    console.log(err);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await User.findOne({ email: email, password: password });
    if (!response) {
      res.status(404).json({ msg: "wrong data" });
    }
    if (response) {
      const id = response._id;
      res
        .status(202)
        .json({
          msg: "Login succesful",
          response,
          token: await generateToken(id),
        });
    }
  } catch (err) {
    res.status(501).json({ msg: "Internal SERVER error" });
    console.log(err);
  }
};
module.exports = { userSignup, userLogin };
