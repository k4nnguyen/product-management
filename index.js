// Use library
require("dotenv").config();
const express = require("express");
const routes = require("./routes/client/index.route");
const routesAdmin = require("./routes/admin/index.route");
const port = process.env.PORT;
const app = express();
const database = require("./config/database");

// Set up folder, view engine and database
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");
database.connect();

// Routes
routes(app);
routesAdmin(app);

// Check port status
app.listen(port, () => {
  console.log(`Running is OK on http://localhost:${port}`);
});
