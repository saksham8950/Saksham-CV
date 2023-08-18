const express = require("express");
const router = express.Router();

// Welcome Page
router.get("/", (req, res) => {
  return res.status(201).send("Hello World");
});

module.exports = router;
