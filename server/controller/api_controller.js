const Message = require("../models/message");

// send Message to DB
module.exports.sendMessage = (req, res) => {
  Message.create(req.body)
    .then(() => {
      return res.status(201).send("Message Sent");
    })
    .catch((err) => {
      return res.status(404).send("Error in Sending Message : ", err);
    });
};
