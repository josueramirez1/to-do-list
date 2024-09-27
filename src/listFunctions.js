import List from "./list.js";

export function loadListToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("Custom-List"));
  if (existingEntries == null) existingEntries = [];
  let list = new List();
  existingEntries.forEach((item) => {
    list = new List(item.title);
    list.createListsFromLocalStorage(item.title);
  });
}

export function addList(e, lists) {
  if (e.target.closest(".new-list-footer")) List.createBlankLists(lists);
  // When user clicks on whitespace
  updateListsInLS(e);
  // When user clicks on trash icon
  deleteList(e);
}

function deleteList(e) {
  if (e.target.closest(".trash-icon")) {
    e.target.closest(".list-title").remove();
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
