import "./css/styles.css";
import { addTodo as todoFunctions, loadTodoToUI } from "./todoFunctions.js";
import { addList as listFunctions, loadListToUI } from "./listFunctions.js";
import createReloadDeletePage from "./createAddDeletePage.js";

function start() {
  const lists = document.querySelector(".lists");
  const secondColumnBody = document.querySelector(".second-column-body");
  // if local storage contains saved data, write script to load the items to the ui.
  loadTodoToUI();
  loadListToUI();
  // When user clicks on second column whitespace...
  todoDomLocalStorage(secondColumnBody);
  // When user clicks on new list button or first column white space
  listDomLocalStorage(lists, secondColumnBody);
  addReloadDeletePageToDomAndLocalStorage(secondColumnBody);
}

function todoDomLocalStorage(secondColumnBody) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListDiv = document.querySelector(".current-list-items");
    let currentListItems = [...currentListDiv.children];
    todoFunctions(e, currentListItems);
  });
}

function listDomLocalStorage(lists, secondColumnBody) {
  document.addEventListener("click", (e) => {
    // When user clicks on new list button...
    listFunctions(e, lists, secondColumnBody);
  });
}

function addReloadDeletePageToDomAndLocalStorage(secondColumnBody) {
  document.addEventListener("click", (e) => {
    createReloadDeletePage(e, secondColumnBody);
  });
}

start();
