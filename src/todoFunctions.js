import Todo from "./todo";

export function addTodo(e, currentListItems) {
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
  // dragging todos
  dragTodos();
}

export function loadTodoToUI() {
  // Finding the name in the ui
  let currentListTitle = document.querySelector(".current-list-title")
    .children[1].textContent;
  // Finding the name in local storage and storing it to variable
  let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
  if (existingEntries == null) {
    existingEntries = [];
    Todo.createLocalStorageArray();
  }
  // calling Todo object and setting to todo variable
  let todo = new Todo();
  existingEntries.forEach((obj) => {
    // looking through the array to find title and description
    todo = new Todo(obj.title, obj.description);
    // calling method and passing title and description
    todo.createTodosFromLocalStorage(obj.title, obj.description);
  });
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
        let currentText = [...dragElement.children];
        let currentTextChildren = [...currentText[0].children];
        currentTextChildren.forEach((child) => child.classList.add("dragging"));
      }
    });

    dragElement.addEventListener("dragend", () => {
      dragElement.classList.remove("dragging");
      let currentText = [...dragElement.children];
      let currentTextChildren = [...currentText[0].children];
      currentTextChildren.forEach((child) =>
        child.classList.remove("dragging")
      );
    });
  });
}

function updateTodoInLS() {
  let currentListTitle = document.querySelector(".current-list-title")
    .children[1].textContent;
  const titles = [...document.querySelectorAll(".list-item")];
  const descriptions = [...document.querySelectorAll(".list-description")];
  const combined = [];
  let todo = new Todo();

  for (let i = 0; i < titles.length; i++) {
    todo = new Todo(titles[i].value, descriptions[i].value);
    combined.push(todo);
  }

  localStorage.setItem(currentListTitle, JSON.stringify(combined));
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
  if (
    e.target.matches(".fa-trash") &&
    e.target.closest(".list-todo-description-box")
  ) {
    e.target.closest(".current-list-item").remove();
  }
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
