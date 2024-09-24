import "./css/styles.css";
import { addTodo as todoFunctions, loadTodoToUI } from "./todoFunctions.js";
import { addList as listFunctions, loadListToUI } from "./listFunctions.js";

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
