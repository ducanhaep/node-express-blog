const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("view", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
