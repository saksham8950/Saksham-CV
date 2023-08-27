const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// DB Config
const db = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/api_route"));

app.listen(PORT, console.log(`Server running on  ${PORT}`));
