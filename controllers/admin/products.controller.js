// [GET] /admin/product
const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
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

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    // Tạo ra biến regex để tìm các từ có chứa substring, "i" để 0 phân biệt chữ hoa/thường
    const regex = new RegExp(keyword, "i");
    find.title = regex;
  }
  const products = await Product.find(find);
  res.render("admin/pages/products/index", {
    pageTitle: "Trang Sản Phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
