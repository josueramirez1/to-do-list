class List {
  constructor(listTitle) {
    this.listTitle = listTitle;
  }
}

class Todo {
  // This function creates an object. The object is an item that contains a message, checkbox, downvote, upvote and delete button
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const today = new List("Today");
console.log(today);
