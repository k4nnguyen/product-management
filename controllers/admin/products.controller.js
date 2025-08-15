// [GET] /admin/product
const Product = require("../../models/product.model");
module.exports.products = async (req, res) => {
  // Mảng chứa các trạng thái của button
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
  // Bấm vào phím nào thì sẽ đánh dấu để active phím đó
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
