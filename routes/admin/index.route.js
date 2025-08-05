// Main route to group all others client routes
const systemConfig = require("../../config/system");
const dashBoard = require("./dashboard.route");
const product = require("./product.route");
module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashBoard);
  app.use(PATH_ADMIN + "/product", product);
};
