import Page from "./page.js";
import Todo from "./todo.js";

export default function createNewPageOrReload(e, secondColumnBody) {
  let currentListTitle;
  // Finding the name in the ui
  if (e.target.matches(".fa-list") && e.target.closest(".list-title")) {
    currentListTitle = e.target.nextElementSibling.value;
  } else return;
  // Finding the name in local storage and storing it to variable
  let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
  if (existingEntries == null) existingEntries = [];
  createNewPage(e, secondColumnBody, existingEntries);
  reloadPage(e, secondColumnBody, existingEntries, currentListTitle);
}

function createNewPage(e, secondColumnBody, existingEntries) {
  if (
    (e.target.matches(".fa-list") && existingEntries.length === 0) ||
    (e.target.matches(".fa-list") && existingEntries == null)
  ) {
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

function reloadPage(e, secondColumnBody, existingEntries, currentListTitle) {
  if (e.target.matches(".fa-list") && existingEntries.length > 0) {
    if (existingEntries == null) return;
    let page = new Page(e.target.closest(".fa-list").nextElementSibling.value);
    page.createPage(secondColumnBody);
    let todo = new Todo();
    existingEntries.forEach((obj) => {
      todo = new Todo(obj.title, obj.description);
      todo.createTodosFromLocalStorage(obj.title, obj.description);
    });
    localStorage.setItem(currentListTitle, JSON.stringify(existingEntries));
  }
}
