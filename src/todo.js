import createBlankListItem from "./createBlankListItem.js";
import createListItem from "./createListItem.js";

export default class Todo {
  // This function creates an object. The object is an item that contains a message, checkbox, downvote, upvote and delete button
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static createLocalStorageArray() {
    let currentListTitle = document.querySelector(".current-list-title")
      .children[1].textContent;
    let listArrayOfObjects = [];
    localStorage.setItem(currentListTitle, JSON.stringify(listArrayOfObjects));
  }

  static createBlankTodo() {
    createBlankListItem();
  }

  static createBlankEntry(nTitle, nDescription, nDate, nPriority) {
    let currentListTitle = document.querySelector(".current-list-title")
      .children[1].textContent;
    let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
    if (existingEntries == null) existingEntries = [];
    let todoOb = {};
    todoOb.title = nTitle;
    todoOb.description = nDescription;
    todoOb.dueDate = nDate;
    todoOb.priority = nPriority;
    existingEntries.push(todoOb);
    console.log(currentListTitle);
    localStorage.setItem(currentListTitle, JSON.stringify(existingEntries));
  }

  createTodosFromLocalStorage(t, d) {
    // This function will create the ui list item
    createListItem(t, d);
  }
}
