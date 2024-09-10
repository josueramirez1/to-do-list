import "./css/styles.css";
import Todo from "./todo.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");

  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    createTodo(e, currentListDiv, currentListItems);
    // activeTodo(e);
  });
}

function createTodo(e, currentListDiv, currentListItems) {
  console.log(e.target);
  // initial todo that creates array. Function ends early
  if (!currentListDiv.hasChildNodes()) {
    Todo.createTodo();
    return;
  }
  // engine begins to look at array to see if every item has a class of inactive. If this is true, then it will create a new todo.
  let inactivity = currentListItems.every((item) => item.matches(".inactive"));
  // engine looks through array to find item that contains the active class. If this is true, then a function will fire which will remove the active todo and remove visibility.
  let activity = currentListItems.find((item) => item.matches(".active"));
  // Make a new todo as long as list-item is not clicked on
  if (
    inactivity &&
    !e.target.matches(".list-item") &&
    !e.target.matches(".list-description") &&
    !e.target.matches("input[type='checkbox']")
  )
    Todo.createTodo();
  // If there is at least one todo active, make it inactive
  if (
    activity &&
    !e.target.matches(".list-description") &&
    !e.target.matches(".current-list-text")
  ) {
    currentListItems.forEach((item) => {
      inactiveTodo(item);
    });
  }
  // if user clicks on list-item, reactivates todo to make corrections
  if (e.target.matches(".list-item")) activeTodo(e);

  deleteTodo(e);
}

function activeTodo(e) {
  if (e.target.matches(".list-item")) {
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

function deleteTodo(e) {
  if (e.target.matches(".fa-trash"))
    e.target.closest(".current-list-item").remove();
}

start();
