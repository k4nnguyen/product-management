// Use Product model and find all active and not deleted product
// [GET] /product
const Product = require("../../models/product.model.js");
module.exports.index = async (req, res) => {
  const products = await Product.find({
    inactive: false,
    deleted: false,
  });
  // Then render with title and products
  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
    products: products,
  });
};
