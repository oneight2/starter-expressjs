var express = require("express");
var router = express.Router();

// Route
const userRouter = require("./user");

// ENDPOINT

router.use("/users", userRouter);

module.exports = router;
