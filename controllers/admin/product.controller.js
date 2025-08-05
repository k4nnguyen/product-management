// [GET] /admin/product
const Product = require("../../models/product.model");
module.exports.product = async (req, res) => {
  const products = await Product.find({
    deleted: false,
  });
  res.render("admin/pages/product/index", {
    pageTitle: "Trang Sản Phẩm",
    products: products,
  });
  console.log(products);
};
