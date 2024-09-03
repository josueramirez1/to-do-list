import "./css/styles.css";
import List from "./list.js";
import Todo from "./todo.js";

function start(e) {
  const secondColumnBody = document.querySelector(".second-column-body");

  if (e.target === secondColumnBody) {
    openTodo();
    const currentListItem = document.querySelector(".current-list-item");
    const listItem = document.querySelector(".list-item");
    console.log(currentListItem);
    listItem.focus();
  }
}

function openTodo() {
  // This variable will create an object based on information it receives

  const currentListItems = document.querySelector(".current-list-items");

  const currentListItem = document.createElement("div");
  currentListItem.classList.add("current-list-item");
  currentListItems.appendChild(currentListItem);

  const currentListText = document.createElement("div");
  currentListText.classList.add("current-list-text");
  currentListItem.appendChild(currentListText);

  // FIRST DIV
  const listTodoCheckbox = document.createElement("div");
  listTodoCheckbox.classList.add("list-todo-checkbox");
  currentListText.appendChild(listTodoCheckbox);

  // input: checkbox
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.name = "todo";
  inputCheckbox.id = "todo";
  inputCheckbox.value = "item";
  // input:title text
  const inputTitleText = document.createElement("input");
  inputTitleText.classList.add("list-item");
  inputTitleText.setAttribute("type", "text");
  inputTitleText.placeholder = "New To-Do";

  listTodoCheckbox.appendChild(inputCheckbox);
  listTodoCheckbox.appendChild(inputTitleText);

  //SECOND DIV
  const listTodoDescriptionBox = document.createElement("div");
  listTodoDescriptionBox.classList.add("list-todo-description-box");
  currentListText.appendChild(listTodoDescriptionBox);
  const inputDescription = document.createElement("input");
  inputDescription.classList.add("list-description");
  inputDescription.type = "text";
  inputDescription.placeholder = "Notes";
  listTodoDescriptionBox.appendChild(inputDescription);
}

document.addEventListener("click", start);
