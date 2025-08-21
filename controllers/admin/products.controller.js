const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
// To display products
// [GET] /admin/product
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

  // Pagination
  let objectPagination = {
    currentPage: 1,
    limitItems: 5,
  };
  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }
  objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

  const countProduct = await Product.countDocuments(find);
  const totalPage = Math.ceil(countProduct / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;
  // End Pagination

  // Limit các sản phẩm trong 1 trang và skip tương ứng với page
  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

  res.render("admin/pages/products/index", {
    pageTitle: "Trang Sản Phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};

// [GET] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;

  // Đổi trạng thái hoạt động của 1 sản phẩm
  let check = false;
  if (status == "inactive") check = true;
  await Product.updateOne({ _id: id }, { inactive: check });

  // Tự động refresh lại trang
  let resetURL = req.get("Referrer") || "/admin/products";
  res.redirect(resetURL);
};
