import "./css/styles.css";
import { addTodo as todoFunctions, loadTodoToUI } from "./todoFunctions.js";
import { addList as listFunctions, loadListToUI } from "./listFunctions.js";
import Page from "./Page.js";

function start() {
  const lists = document.querySelector(".lists");
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");
  // if local storage contains saved data, write script to load the items to the ui.
  loadTodoToUI();
  loadListToUI();
  // When user clicks on second column whitespace...
  addTodoToDomAndLocalStorage(secondColumnBody, currentListDiv);
  // When user clicks on new list button or first column white space
  addNewListToDomAndLocalStorage(lists);

  addNewPage(secondColumnBody);
}

function addNewPage(secondColumnBody) {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".fa-list")) {
      if (e.target.closest(".fa-list").nextElementSibling.value === "") {
        let page = new Page("New List");
        page.createPage(secondColumnBody);
        page.setItemToLocalStorage();
      } else {
        let page = new Page(
          e.target.closest(".fa-list").nextElementSibling.value
        );
        page.createPage(secondColumnBody);
        page.setItemToLocalStorage();
      }
    }
  });
}

function addNewListToDomAndLocalStorage(lists) {
  document.addEventListener("click", (e) => {
    // When user clicks on new list button...
    listFunctions(e, lists);
  });
}

function addTodoToDomAndLocalStorage(secondColumnBody, currentListDiv) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    todoFunctions(e, currentListItems);
  });
}

start();
