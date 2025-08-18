module.exports = (query) => {
  let keyword = "";
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    // Tạo ra biến regex để tìm các từ có chứa substring, "i" để 0 phân biệt chữ hoa/thường
    const regex = new RegExp(objectSearch.keyword, "i");
    objectSearch.regex = regex;
  }
  return objectSearch;
};
