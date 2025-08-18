// [GET] /admin/product
const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
module.exports.products = async (req, res) => {
  // Mảng chứa các trạng thái của button
  const filterStatus = filterStatusHelper(req.query);
  let find = {
    deleted: false,
  };

  // Nếu trạng thái là inactive -> chỉ tìm sản phẩm inactive
  if (req.query.status === "inactive") {
    find.inactive = true;
  } else if (req.query.status === "active") {
    find.inactive = false;
  }

  // Nhúng searchHelper vào, nếu có keyword mới tìm theo regex, không thì tìm tất cả
  const objectSearch = searchHelper(req.query);
  if (objectSearch.keyword) {
    find.title = objectSearch.regex;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index", {
    pageTitle: "Trang Sản Phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
  });
};
