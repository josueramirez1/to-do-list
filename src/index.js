import "./css/styles.css";
import Todo from "./todo.js";
import createNewList from "./createNewList.js";

function start() {
  const secondColumnBody = document.querySelector(".second-column-body");
  const currentListDiv = document.querySelector(".current-list-items");
  const newListFooterDiv = document.querySelector(".new-list-footer");
  // if local storage contains saved data, write script to load the items to the ui.
  loadTodoToUI();
  addTodoToDomAndLocalStorage(secondColumnBody, currentListDiv);
  // addNewList(newListFooterDiv)
}

function addNewList(newListFooterDiv) {
  newListFooterDiv.addEventListener("click", (e) => {
    if (e.target.matches("fa-plus") || e.target.matches("p")) createNewList();
  });
}

function addTodoToDomAndLocalStorage(secondColumnBody, currentListDiv) {
  secondColumnBody.addEventListener("click", (e) => {
    let currentListItems = [...currentListDiv.children];
    addTodo(e, currentListItems);
  });
}

function addTodo(e, currentListItems) {
  // user begins to create todos and write
  createTodo(e, currentListItems);
  // Makes item inactive if user clicks outside of the text box
  makeTodoItemInactive(e, currentListItems);
  // if user clicks on text box, reactivates todo to make corrections
  makeTodoItemActive(e);
  // if user click on trash icon, todo is deleted
  deleteTodo(e);
  // local storage is automatically updated including addition and deletions
  updateTodoInLS(e);
}

function loadTodoToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("Todo-List"));
  if (existingEntries == null) existingEntries = [];
  let todo = new Todo();
  existingEntries.forEach((obj) => {
    todo = new Todo(obj.title, obj.description);
    todo.createTodosFromLocalStorage(obj.title, obj.description);
  });
}

function updateTodoInLS(e) {
  const titles = [...document.querySelectorAll(".list-item")];
  const descriptions = [...document.querySelectorAll(".list-description")];
  const combined = [];
  let todo = new Todo();

  for (let i = 0; i < titles.length; i++) {
    todo = new Todo(titles[i].value, descriptions[i].value);
    combined.push(todo);
  }

  localStorage.setItem("Todo-List", JSON.stringify(combined));
}

function createTodo(e, currentListItems) {
  // engine begins to look at array to see if every item has a class of inactive. If this is true, then it will create a new todo.
  let inactivity = currentListItems.every((item) => item.matches(".inactive"));

  // Make a new todo as long as list-item is not clicked on
  if (
    inactivity &&
    !e.target.matches(".list-item") &&
    !e.target.matches(".list-description") &&
    !e.target.matches("input[type='checkbox']")
  )
    Todo.createBlankTodo();
}

function makeTodoItemActive(e) {
  if (e.target.matches(".list-item")) {
    e.target.closest(".current-list-item").classList.remove("inactive");
    e.target.closest(".current-list-item").classList.add("active");
    e.target.closest(
      ".list-todo-checkbox"
    ).nextElementSibling.style.visibility = "visible";
  }
}

function makeTodoItemInactive(e, currentListItems) {
  // engine looks through array to find item that contains the active class. If this is true, then a function will fire which will remove the active todo and remove visibility.
  let activity = currentListItems.find((item) => item.matches(".active"));
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
}

function deleteTodo(e) {
  if (e.target.matches(".fa-trash"))
    e.target.closest(".current-list-item").remove();
}

// Helper function for makeTodoItemInactive
function inactiveTodo(item) {
  item.classList.add("inactive");
  item.classList.remove("active");
  let todoDescriptionBox = [
    ...document.querySelectorAll(".list-todo-description-box"),
  ];
  todoDescriptionBox.forEach((i) => (i.style.visibility = "hidden"));
}

start();
