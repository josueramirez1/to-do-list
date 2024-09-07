import "./css/styles.css";
import Todo from "./todo.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");

  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    createTodo(e, currentListDiv, currentListItems);

    // document.addEventListener("click", addNewTodo(currentListItems));
  });
}

function createTodo(e, currentListDiv, currentListItems) {
  // initial todo that creates array. Function ends early
  if (!currentListDiv.hasChildNodes()) {
    Todo.createTodo();
    return;
  }
  // engine loops through each item

  let inactivity = currentListItems.every((item) => {
    return item.matches(".inactive");
  });

  let activity = currentListItems.find((item) => {
    return item.matches(".active");
  });

  if (inactivity) Todo.createTodo();
  if (activity) {
    currentListItems.forEach((item) => {
      inactiveTodo(item);
    });
  }
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

function inactiveTodo(item) {
  item.classList.add("inactive");
  item.classList.remove("active");
  let itemGrandchildren = [
    ...document.querySelector(".current-list-text").children,
  ];
  itemGrandchildren.forEach((i) => {
    if (i.matches(".list-todo-description-box")) i.style.visibility = "hidden";
  });
}

start();
