// [GET] /admin/product
const Product = require("../../models/product.model");
module.exports.products = async (req, res) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Ngừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];
  if (req.query.status) {
    const index = filterStatus.findIndex((item) => item.status == req.query.status);
    filterStatus[index].class = "active";
  } else {
    const index = filterStatus.findIndex((item) => item.status == "");
    filterStatus[index].class = "active";
  }
  let find = {
    deleted: false,
  };
  if (req.query.status === "inactive") {
    find.inactive = true;
  } else if (req.query.status === "active") {
    find.inactive = false;
  }
  const products = await Product.find(find);
  res.render("admin/pages/products/index", {
    pageTitle: "Trang Sản Phẩm",
    products: products,
    filterStatus: filterStatus,
  });
};
