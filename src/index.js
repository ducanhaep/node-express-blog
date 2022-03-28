const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routers");
const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 127.0.0.1 - localhost
