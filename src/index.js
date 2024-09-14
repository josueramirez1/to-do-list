import "./css/styles.css";
import Todo from "./todo.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");
  let listItems = document.querySelectorAll(".list-item");
  Todo.createLocalStorageArray();

  addTodoToDomAndLocalStorage(secondColumnBody, currentListDiv, listItems);
}

function addTodoToDomAndLocalStorage(
  secondColumnBody,
  currentListDiv,
  listItems
) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    addTodo(e, currentListDiv, currentListItems, listItems);
  });
}

function addTodo(e, currentListDiv, currentListItems, listItems) {
  listItems = [...document.querySelectorAll(".list-item")];
  // initial todo that creates array. Function ends early
  if (!currentListDiv.hasChildNodes()) {
    Todo.createBlankTodo();
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
    Todo.createBlankTodo();
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
  activeTodo(e);
  // if user click on trash icon, todo is deleted
  deleteTodo(e);
  // add todo to local storage
  updateTodoInLS(e);
}

function updateTodoInLS(e) {
  // let existingEntries = JSON.parse(localStorage.getItem("Todo-List"));
  // if (existingEntries == null) existingEntries = [];

  const titles = [...document.querySelectorAll(".list-item")];
  const descriptions = [...document.querySelectorAll(".list-description")];
  const combined = [];
  let todo = new Todo();

  for (let i = 0; i < titles.length; i++) {
    // todoObj.title = titles[i].value;
    // todoObj.description = descriptions[i].value;
    todo = new Todo(titles[i].value, descriptions[i].value);
    combined.push(todo);
  }

  localStorage.setItem("Todo-List", JSON.stringify(combined));
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
