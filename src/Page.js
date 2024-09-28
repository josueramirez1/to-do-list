import Todo from "./todo.js";

export default class Page {
  constructor(title) {
    this.title = title;
  }

  loadTodoToUI() {
    let currentListTitle = document.querySelector(".current-list-title")
      .children[1].textContent;
    let existingEntries = JSON.parse(localStorage.getItem(currentListTitle));
    if (existingEntries == null) existingEntries = [];
    let todo = new Todo();
    existingEntries.forEach((obj) => {
      todo = new Todo(obj.title, obj.description);
      todo.createTodosFromLocalStorage(obj.title, obj.description);
    });
  }

  setItemToLocalStorage() {
    let newListItemArray = [];
    localStorage.setItem(this.title, JSON.stringify(newListItemArray));
  }

  createPage(secondColumnBody) {
    secondColumnBody.textContent = "";

    let listTitle = document.createElement("div");
    listTitle.classList.add("current-list-title");
    let listItem = document.createElement("div");
    listItem.classList.add("current-list-items");
    secondColumnBody.appendChild(listTitle);
    secondColumnBody.appendChild(listItem);

    let i = document.createElement("i");
    let h2 = document.createElement("h2");
    i.classList.add("fa-solid");
    i.classList.add("fa-list");
    i.classList.add("fa-xl");
    i.style.color = "rgb(230, 99, 191)";
    i.setAttribute("aria-hidden", true);

    h2.textContent = this.title;

    listTitle.appendChild(i);
    listTitle.appendChild(h2);
  }
}
