const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./api_route"));

app.listen(PORT, console.log("Listening on 4000"));
