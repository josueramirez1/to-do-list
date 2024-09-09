import "./css/styles.css";
import Todo from "./todo.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");
  let listItemDiv = [...document.querySelectorAll(".list-item")];

  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    let listItemDiv = [...document.querySelectorAll(".list-item")];

    createTodo(e, currentListDiv, currentListItems);
    activeTodo(e);
  });
}

function createTodo(e, currentListDiv, currentListItems) {
  // initial todo that creates array. Function ends early
  if (!currentListDiv.hasChildNodes()) {
    Todo.createTodo();
    return;
  }

  // engine begins to look at array to see if every item has a class of inactive. If this is true, then it will create a new todo.
  let inactivity = currentListItems.every((item) => {
    return item.matches(".inactive");
  });
  // engine looks through array to find item that contains the active class. If this is true, then a function will fire which will remove the active todo and remove visibility.
  let activity = currentListItems.find((item) => {
    return item.matches(".active");
  });

  if (inactivity && !e.target.matches(".list-item")) Todo.createTodo();
  if (activity) {
    currentListItems.forEach((item) => {
      inactiveTodo(item);
    });
  }
  if (e.target.matches(".list-item")) activeTodo(e);
}

function activeTodo(e) {
  if (e.target.matches(".list-item")) {
    console.log("yes");
    e.target.closest(".current-list-item").classList.remove("inactive");
    e.target.closest(".current-list-item").classList.add("active");
    e.target.closest(
      ".list-todo-checkbox"
    ).nextElementSibling.style.visibility = "visible";
  }
  return;
}

function inactiveTodo(item) {
  item.classList.add("inactive");
  item.classList.remove("active");
  let todoDescriptionBox = [
    ...document.querySelectorAll(".list-todo-description-box"),
  ];
  todoDescriptionBox.forEach((i) => (i.style.visibility = "hidden"));
}

start();
