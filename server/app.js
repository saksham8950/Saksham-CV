const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 4000;

// DB Config
const db = require("./config/db");
const clientBuildPath = path.join(__dirname, "..", "client", "build");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use("/", require("./routes/api_route"));

app.listen(PORT, console.log(`Server running on  ${PORT}`));
