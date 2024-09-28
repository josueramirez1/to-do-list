import "./css/styles.css";
import { addTodo as todoFunctions, loadTodoToUI } from "./todoFunctions.js";
import { addList as listFunctions, loadListToUI } from "./listFunctions.js";
import createNewPage from "./createBlankPage.js";

function start() {
  const lists = document.querySelector(".lists");
  const secondColumnBody = document.querySelector(".second-column-body");
  // if local storage contains saved data, write script to load the items to the ui.
  loadTodoToUI();
  loadListToUI();
  // When user clicks on second column whitespace...
  addTodoToDomAndLocalStorage(secondColumnBody);
  // When user clicks on new list button or first column white space
  addNewListToDomAndLocalStorage(lists);

  addNewPageToDomAndLocalStorage(secondColumnBody);
}

function addTodoToDomAndLocalStorage(secondColumnBody) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListDiv = document.querySelector(".current-list-items");
    let currentListItems = [...currentListDiv.children];
    console.log(currentListItems);
    todoFunctions(e, currentListItems);
  });
}

function addNewListToDomAndLocalStorage(lists) {
  document.addEventListener("click", (e) => {
    // When user clicks on new list button...
    listFunctions(e, lists);
  });
}

function addNewPageToDomAndLocalStorage(secondColumnBody) {
  document.addEventListener("click", (e) => {
    createNewPage(e, secondColumnBody);
  });
}

start();
