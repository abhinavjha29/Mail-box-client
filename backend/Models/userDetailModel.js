const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,

    required: true,
  },
});

const User = mongoose.model("User_detail", schema);

module.exports = User;
