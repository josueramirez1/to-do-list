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
  // currentListItem.appendChild(currentListText);
  return { currentListText };
}

function todoListCheckboxAndTitle() {
  // FIRST DIV
  const listTodoCheckbox = document.createElement("div");
  listTodoCheckbox.classList.add("list-todo-checkbox");
  // currentListText.appendChild(listTodoCheckbox);

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
  // append to first div
  listTodoCheckbox.appendChild(inputCheckbox);
  listTodoCheckbox.appendChild(inputTitleText);

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

  listTodoDescriptionBox.appendChild(inputDescription);

  return { listTodoDescriptionBox };
}
