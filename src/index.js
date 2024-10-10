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

function dragTodos() {
  let draggableElement = [...document.querySelectorAll(".current-list-item")];
  draggableElement.forEach((dragElement) => {
    dragElement.draggable = true;

    dragElement.addEventListener("dragstart", (e) => {
      dragElement.draggable = true;
      if (
        e.target.matches(".current-list-item") ||
        e.target.matches(".current-list-text")
      ) {
        dragElement.classList.add("dragging");
      }
    });

    dragElement.addEventListener("dragend", () => {
      dragElement.classList.remove("dragging");
    });
  });
}

function addTodoToDomAndLocalStorage(secondColumnBody) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListDiv = document.querySelector(".current-list-items");
    let currentListItems = [...currentListDiv.children];
    todoFunctions(e, currentListItems);
    dragTodos();
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
