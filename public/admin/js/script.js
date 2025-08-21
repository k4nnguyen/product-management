// Set up for display active/inactive product
const button = document.querySelectorAll("[button-status]");
let url = new URL(window.location.href);
if (button.length > 0) {
  // Nếu có button, sẽ duyệt qua url
  button.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Kiểm tra trạng thái, nếu đang có trạng thái sẽ set, còn không thì delete -> thay url bằng url của button
      const status = btn.getAttribute("button-status");
      if (status) {
        url.searchParams.set("status", status);
        url.searchParams.set("page", 1);
      } else {
        url.searchParams.delete("status");
        url.searchParams.set("page", 1);
      }
      window.location.href = url.href;
    });
  });
}

// Set up for searching product

const productSearch = document.querySelector("#form-search");
if (productSearch) {
  productSearch.addEventListener("submit", (s) => {
    // To prevent reload from page
    s.preventDefault();
    const keyword = s.target.elements.keyword.value;

    if (keyword) {
      url.searchParams.set("keyword", keyword);
      url.searchParams.set("page", 1);
      // Always Set Page = 1
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination) {
  buttonPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");
      if (page) {
        url.searchParams.set("page", page);
      } else {
        url.searchParams.delete("page");
      }
      window.location.href = url.href;
    });
  });
}
// End Pagination
