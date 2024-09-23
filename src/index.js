import "./css/styles.css";
import Todo from "./todo.js";
import List from "./list.js";

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
    addList(e, lists);
    // When user clicks on whitespace
    updateListsInLS(e);
  });
}

function addList(e, lists) {
  if (e.target.closest(".new-list-footer")) List.createBlankLists(lists);
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
  updateTodoInLS();
}

function loadTodoToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("Inbox"));
  if (existingEntries == null) existingEntries = [];
  let todo = new Todo();
  existingEntries.forEach((obj) => {
    todo = new Todo(obj.title, obj.description);
    todo.createTodosFromLocalStorage(obj.title, obj.description);
  });
}

function loadListToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("New-List"));
  if (existingEntries == null) existingEntries = [];
  let list = new List();
  existingEntries.forEach((item) => {
    list = new List(item.title);
    list.createListsFromLocalStorage(item.title);
  });
}

function updateListsInLS(e) {
  const listArr = [];
  let titles = [...document.querySelectorAll(".list-text-item")];
  let list = new List();

  for (let i = 0; i < titles.length; i++) {
    list = new List(titles[i].value);
    listArr.push(list);
  }

  localStorage.setItem("New-List", JSON.stringify(listArr));
}

function updateTodoInLS() {
  const titles = [...document.querySelectorAll(".list-item")];
  const descriptions = [...document.querySelectorAll(".list-description")];
  const combined = [];
  let todo = new Todo();

  for (let i = 0; i < titles.length; i++) {
    todo = new Todo(titles[i].value, descriptions[i].value);
    combined.push(todo);
  }

  localStorage.setItem("Inbox", JSON.stringify(combined));
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
