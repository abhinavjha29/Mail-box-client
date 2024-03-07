const EmailModel = require("../Models/emailDetail");
const UserModel = require("../Models/userDetailModel");
const mongoose = require("mongoose");
const storeMail = async (req, res) => {
  try {
    const receiverMailId = req.body.recipient;
    const subject = req.body.subject;
    const body = req.body.emailBody;
    const senderId = req.user.id;
    const { date } = req.body;
    const senderMail = await UserModel.findById(req.user._id);

    const data = await EmailModel.create({
      senderId: senderId,
      receiverMailId: receiverMailId,
      subject: subject,
      body: body,
      senderMail: senderMail.email,
      date: date,
    });
    console.log(data);
    res.status(202).json({ data });
  } catch (err) {
    console.log(err);
    res.status(501);
  }
};

const getAllMail = async (req, res) => {
  try {
    console.log(req.user._id);
    const id = req.user._id;

    // const reciverId = id.toString;
    // console.log(reciverId);
    const mailId = await UserModel.findById(id);
    if (mailId) {
      const mailData = await EmailModel.find({ receiverMailId: mailId.email });
      // console.log(mailData);
      if (mailData) {
        return res.status(202).json({ mailData });
      } else {
        res.status(404).json({ msg: "NO MAILS" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(501);
  }
};

const getSingleMail = async (req, res) => {
  try {
    console.log(req.body);
    const id = new mongoose.Types.ObjectId(req.body.id);
    const resp = await EmailModel.findById(id);
    console.log(resp);
    if (resp) {
      res.status(202).json({ resp });
    } else throw new Error();
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const deleteMail = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.body.id);
    const delResp = await EmailModel.findByIdAndDelete(id);
    if (delResp) {
      res.status(202).json({ delResp });
    } else throw new Error();
  } catch (err) {
    console.log(err);
    res.status(501);
  }
};
const getSentMail = async (req, res) => {
  try {
    const id = req.user._id;
    const sentMailData = await EmailModel.find({ senderId: id });
    console.log(sentMailData);
    res.status(202).json({ sentMailData });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
module.exports = {
  storeMail,
  getAllMail,
  getSingleMail,
  deleteMail,
  getSentMail,
};
