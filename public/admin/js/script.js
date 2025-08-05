const button = document.querySelectorAll("[button-status]");
if (button.length > 0) {
  let url = new URL(window.location.href);
  console.log(url);
  button.forEach((btn) => {
    btn.addEventListener("click", () => {
      const status = btn.getAttribute("button-status");
      console.log(status);
      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
}
