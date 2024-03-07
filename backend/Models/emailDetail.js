const mongoose = require("mongoose");

const emailDetailSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_details",
    required: true,
  },
  senderMail: {
    type: String,
    required: true,
  },
  receiverMailId: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const EmailDetail = mongoose.model("EmailDetail", emailDetailSchema);

module.exports = EmailDetail;
