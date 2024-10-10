export default function createListItem(t, d) {
  const currentListItems = document.querySelector(".current-list-items");
  currentListItems.appendChild(currentListItem(t, d).currentListItem);
}

function currentListItem(t, d) {
  const currentListItem = document.createElement("div");
  currentListItem.classList.add("current-list-item");
  currentListItem.classList.add("inactive");
  currentListItem.appendChild(currentListText(t, d).currentListText);
  return { currentListItem };
}

function currentListText(t, d) {
  const currentListText = document.createElement("div");
  currentListText.classList.add("current-list-text");
  currentListText.appendChild(todoListCheckboxAndTitle(t, d).listTodoCheckbox);
  currentListText.appendChild(todoDescription(t, d).listTodoDescriptionBox);
  return { currentListText };
}

function todoListCheckboxAndTitle(t, d) {
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
  inputTitleText.value = t;

  // append to first div
  listTodoCheckbox.appendChild(inputCheckbox);
  listTodoCheckbox.appendChild(inputTitleText);

  return { listTodoCheckbox };
}

function todoDescription(t, d) {
  // Div that will contain input description
  const listTodoDescriptionBox = document.createElement("div");
  listTodoDescriptionBox.classList.add("list-todo-description-box");
  listTodoDescriptionBox.style.visibility = "hidden";
  // The input description
  const inputDescription = document.createElement("input");
  inputDescription.classList.add("list-description");
  inputDescription.type = "text";
  inputDescription.placeholder = "Notes";
  inputDescription.value = d;

  const trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash");

  // <i class="fa-solid fa-trash"></i>

  listTodoDescriptionBox.appendChild(inputDescription);
  listTodoDescriptionBox.appendChild(trash);

  return { listTodoDescriptionBox };
}
