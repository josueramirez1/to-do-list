import List from "./list.js";
import Page from "./page.js";

export function loadListToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("Custom-List"));
  if (existingEntries == null) existingEntries = [];
  let list = new List();
  existingEntries.forEach((item) => {
    list = new List(item.title);
    list.createListsFromLocalStorage(item.title);
  });
}

export function addList(e, lists, secondColumnBody) {
  if (e.target.closest(".new-list-footer")) List.createBlankLists(lists);
  // When user clicks on whitespace
  updateListsInLS(e);
  // When user clicks on trash icon
  deleteList(e, secondColumnBody);
}

function deleteList(e, secondColumnBody) {
  let currentListTitle;
  // Finding the name in the ui

  // This deletes list from local storage
  if (e.target.closest(".trash-icon") && e.target.matches(".fa-trash")) {
    currentListTitle =
      e.target.closest(".trash-icon").previousElementSibling.children[1].value;
    e.target.closest(".list-title").remove();
    localStorage.removeItem(currentListTitle);
    // this creates new default page
    let page = new Page();
    page.createDefaultPage(secondColumnBody);
    // this updates custom list in local storage
    updateListsInLS();
  }
}

function updateListsInLS(e) {
  const listArr = [];
  let titles = [...document.querySelectorAll(".list-text-item")];
  let list = new List();

  for (let i = 0; i < titles.length; i++) {
    list = new List(titles[i].value);
    listArr.push(list);
  }

  localStorage.setItem("Custom-List", JSON.stringify(listArr));
}
