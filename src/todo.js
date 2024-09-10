import addToLocalStorage from "./addToLocalStorage.js";
import createListItem from "./createListItem.js";

export default class Todo {
  // This function creates an object. The object is an item that contains a message, checkbox, downvote, upvote and delete button
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static createTodo() {
    createListItem();
    addToLocalStorage();
  }
}
