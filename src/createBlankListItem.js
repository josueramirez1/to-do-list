import Todo from "./todo.js";
import { format } from "date-fns";

export default function createListItem() {
  const currentListItems = document.querySelector(".current-list-items");
  currentListItems.appendChild(currentListItem().currentListItem);
}

function currentListItem() {
  const currentListItem = document.createElement("div");
  currentListItem.classList.add("current-list-item");
  currentListItem.classList.add("active");

  currentListItem.appendChild(currentListText().currentListText);
  return { currentListItem };
}

function currentListText() {
  const currentListText = document.createElement("div");
  currentListText.classList.add("current-list-text");
  currentListText.appendChild(todoListCheckboxAndTitle().listTodoCheckbox);
  currentListText.appendChild(todoDescription().listTodoDescriptionBox);
  let title = currentListText.children[0].children[1].value;
  let description = currentListText.children[1].children[0].value;
  let day = currentListText.children[0].children[2].value;
  let options = [
    ...currentListText.children[0].children[3].children[0].children,
  ];
  let checked = options.filter((check) => check.selected);
  let priority = checked[0].innerText;
  Todo.createBlankEntry(title, description, day, priority);

  return { currentListText };
}

function todoListCheckboxAndTitle() {
  // FIRST DIV
  const listTodoCheckbox = document.createElement("div");
  listTodoCheckbox.classList.add("list-todo-checkbox");

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
  // input: calendar
  const dateCreated = document.createElement("input");
  dateCreated.type = "date";
  const currentDate = format(new Date(), "yyyy-MM-dd");
  dateCreated.value = currentDate;
  dateCreated.classList.add("list-date");

  // input: dropdown
  const labelCreated = document.createElement("label");
  labelCreated.for = "priority";
  labelCreated.innerText = "Priority";
  labelCreated.classList.add("list-label");
  const selectCreated = document.createElement("select");
  selectCreated.id = "priority";
  selectCreated.classList.add("list-label-priority");
  const option1 = document.createElement("option");
  option1.value = "high";
  option1.innerText = "High";
  const option2 = document.createElement("option");
  option2.value = "medium";
  option2.innerText = "Medium";
  const option3 = document.createElement("option");
  option3.value = "low";
  option3.innerText = "Low";

  selectCreated.appendChild(option1);
  selectCreated.appendChild(option2);
  selectCreated.appendChild(option3);
  labelCreated.appendChild(selectCreated);

  // append to first div
  listTodoCheckbox.appendChild(inputCheckbox);
  listTodoCheckbox.appendChild(inputTitleText);
  listTodoCheckbox.appendChild(dateCreated);
  listTodoCheckbox.appendChild(labelCreated);

  return { listTodoCheckbox };
}

function todoDescription() {
  // Div that will contain input description
  const listTodoDescriptionBox = document.createElement("div");
  listTodoDescriptionBox.classList.add("list-todo-description-box");
  // The input description
  const inputDescription = document.createElement("input");
  inputDescription.classList.add("list-description");
  inputDescription.type = "text";
  inputDescription.placeholder = "Notes";

  const trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash");

  listTodoDescriptionBox.appendChild(inputDescription);
  listTodoDescriptionBox.appendChild(trash);

  return { listTodoDescriptionBox };
}
