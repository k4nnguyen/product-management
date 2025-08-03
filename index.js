require("dotenv").config();
const express = require("express");
const routes = require("./routes/client/index.route");
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express();

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");

routes(app);

app.listen(port, () => {
  console.log(`Running is OK on http://localhost:${port}`);
});
