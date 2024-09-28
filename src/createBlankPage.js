import Page from "./page.js";

export default function createNewPage(e, secondColumnBody) {
  if (e.target.closest(".fa-list")) {
    let page = new Page();
    if (e.target.closest(".fa-list").nextElementSibling.value === "") {
      page = new Page("New List");
    } else {
      page = new Page(e.target.closest(".fa-list").nextElementSibling.value);
    }
    page.createPage(secondColumnBody);
    page.loadTodoToUI();
    page.setItemToLocalStorage();
  }
}
