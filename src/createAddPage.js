import Page from "./page.js";
import Todo from "./todo.js";

export default function customCreateReloadPage(e, secondColumnBody) {
  let currentListTitle;
  // Finding the name in the ui
  if (e.target.matches(".fa-list") && e.target.closest(".list-title")) {
    currentListTitle = e.target.nextElementSibling.value;
  } else return;

  // Finding the name in local storage and storing it to variable
  let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
  if (existingEntries == null || existingEntries.length === 0) {
    existingEntries = [];
    customCreateNewPage(e, secondColumnBody, currentListTitle);
  }
  if (existingEntries.length > 0) {
    customReloadPage(e, secondColumnBody, currentListTitle, existingEntries);
  }
}

export function defaultCreateReloadPage(e, secondColumnBody) {
  let currentListTitle;
  // Finding the name in the ui
  if (e.target.matches(".default") && e.target.closest(".list-title")) {
    currentListTitle = e.target.nextElementSibling.textContent;
  } else return;

  // Finding the name in local storage and storing it to variable
  let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
  if (existingEntries == null) existingEntries = [];
  defaultCreateNewPage(e, secondColumnBody, existingEntries, currentListTitle);
  defaultReloadPage(e, secondColumnBody, existingEntries, currentListTitle);
}

function defaultCreateNewPage(
  e,
  secondColumnBody,
  existingEntries,
  currentListTitle
) {
  if (existingEntries.length === 0 || existingEntries == null) {
    let page = new Page();
    page = new Page(currentListTitle);
    page.createPage(e, secondColumnBody);
    page.loadTodoToUI();
    page.setItemToLocalStorage();
  }
}

function defaultReloadPage(
  e,
  secondColumnBody,
  existingEntries,
  currentListTitle
) {
  if (existingEntries.length > 0) {
    let page = new Page(currentListTitle);
    page.createPage(e, secondColumnBody);
    let todo = new Todo();
    existingEntries.forEach((obj) => {
      todo = new Todo(obj.title, obj.description);
      todo.createTodosFromLocalStorage(obj.title, obj.description);
    });
    localStorage.setItem(currentListTitle, JSON.stringify(existingEntries));
  }
}

function customCreateNewPage(e, secondColumnBody, currentListTitle) {
  let page = new Page();
  if (currentListTitle === "") {
    page = new Page("New List");
  } else {
    page = new Page(currentListTitle);
  }
  page.createPage(e, secondColumnBody);
  page.loadTodoToUI(currentListTitle);
  page.setItemToLocalStorage();
}

function customReloadPage(
  e,
  secondColumnBody,
  currentListTitle,
  existingEntries
) {
  let page = new Page(currentListTitle);
  page.createPage(e, secondColumnBody);
  let todo = new Todo();
  existingEntries.forEach((obj) => {
    todo = new Todo(obj.title, obj.description);
    todo.createTodosFromLocalStorage(obj.title, obj.description);
  });
  localStorage.setItem(currentListTitle, JSON.stringify(existingEntries));
}
