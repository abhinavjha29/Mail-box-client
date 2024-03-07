const Express = require("express");
const cors = require("cors");
const connectDB = require("./Util/dbconnection");
const UserRouter = require("./router/userRouter");
const EmailRouter = require("./router/emailRouter");
const app = Express();
app.use(Express.json());
app.use(cors({ origin: "*" }));
const PORT = 5000;
app.use("/user", UserRouter);
app.use("/email", EmailRouter);
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
    console.log("Connected to port 5000");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
});

