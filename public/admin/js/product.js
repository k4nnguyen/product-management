// Change Status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonChangeStatus.length > 0) {
  // Try to get the form and data-path in form
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");
  buttonChangeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      // We need to revert the status, so active -> inactive and so on
      const currentStatus = button.getAttribute("data-status");
      const productID = button.getAttribute("data-id");
      let newStatus = currentStatus == "active" ? "inactive" : "active";

      //   Use method-overide to use PATCH method
      const mainAction = path + `/${newStatus}/${productID}?_method=PATCH`;

      // Change form.action to mainAction, and submit to database
      formChangeStatus.action = mainAction;
      formChangeStatus.submit();
    });
  });
}
// End Change Status
