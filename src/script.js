// class Item {
//   // This function creates an object. The object is an item that contains a message, checkbox, downvote, upvote and delete button
//   constructor(title, description, priority) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//   }
// }

// function createTodoItem() {
//   const content = document.querySelector("#content");
//   const todoItem = document.createElement("div");
//   todoItem.classList.add("todo-item");
//   const newItem = new Item("General", "Go to the store", "today", "high");
//   console.log(newItem.title);
//   todoItem.textContent = newItem.title;
//   content.appendChild(todoItem);
// }

// createTodoItem();

class InboxTab {
  constructor(inboxTitle) {
    this.tabTitle = tabTitle;
  }
}

function createHub() {
  const content = document.querySelector("#content");
  const firstColumn = document.createElement("div");
  const secondColumn = document.createElement("div");
  content.appendChild(firstColumn);
  content.appendChild(secondColumn);

  firstColumn.classList.add("first-column");
  secondColumn.classList.add("second-column");

  const createGeneralTabs = () => {
    const inbox = new Tab("Inbox");
    console.log(inbox);
    firstColumn.appendChild(inbox.tabTitle);
  };
  createGeneralTabs();
}
createHub();
