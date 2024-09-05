import "./css/styles.css";
import Todo from "./todo.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  initialTodo();
  secondColumnBody.addEventListener("click", (e) => {
    activeTodo(e);
    inactiveTodo(e);
  });
}

function initialTodo() {
  // select parent
  const currentListItems = document.querySelector(".current-list-items");
  // if list does not have an item, add one
  if (!currentListItems.hasChildNodes()) Todo.createTodo();
}

function activeTodo(e) {
  if (e.target.matches(".list-item")) {
    e.target.closest(".current-list-item").classList.remove("inactive");
    e.target.closest(".current-list-item").classList.add("active");
    e.target.closest(
      ".list-todo-checkbox"
    ).nextElementSibling.style.visibility = "visible";
  }
}

function inactiveTodo(e) {
  const currentList = [...document.querySelectorAll(".current-list-item")];
  if (e.target.matches(".second-column-body")) {
    currentList.forEach((item) => {
      item.classList.add("inactive");
      item.classList.remove("active");
      hideNotes();
    });
  }
}

function hideNotes() {
  const itemGrandchildren = [
    ...document.querySelector(".current-list-text").children,
  ];
  for (let todo of itemGrandchildren) {
    if (todo.matches(".list-todo-description-box")) {
      todo.style.visibility = "hidden";
    }
  }
}

start();
