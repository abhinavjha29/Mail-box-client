const Express = require("express");
const EmailController = require("../controller/EmailController");
const auth = require("../Middlewere/authentication");

const router = Express.Router();

router.post("/sendMail/:token", auth.authenticate, EmailController.storeMail);
router.get("/getMail/:token", auth.authenticate, EmailController.getAllMail);
router.post("/getSingleMail", EmailController.getSingleMail);
router.post("/deleteMail", EmailController.deleteMail);
router.get(
  "/getSentMail/:token",
  auth.authenticate,
  EmailController.getSentMail
);
module.exports = router;
