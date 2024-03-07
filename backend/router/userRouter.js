const Express = require("express");
const UserController = require("../controller/UserController");

const router = Express.Router();

router.post("/signup", UserController.userSignup);
router.post("/login", UserController.userLogin);
module.exports = router;
