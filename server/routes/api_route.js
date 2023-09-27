const express = require("express");
const router = express.Router();

const apiController = require("../controller/api_controller");

// Welcome Page
// router.get("/", (req, res) => {
//   return res.status(201).send("Hello World Server");
// });

//Send Message
router.post("/send-message", apiController.sendMessage);

module.exports = router;
