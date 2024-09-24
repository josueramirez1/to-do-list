import List from "./list.js";

export function deleteList(e) {
  if (e.target.closest(".trash-icon")) {
    e.target.closest(".list-title").remove();
    updateListsInLS();
  }
}

export function addList(e, lists) {
  if (e.target.closest(".new-list-footer")) List.createBlankLists(lists);
}

export function loadListToUI() {
  let existingEntries = JSON.parse(localStorage.getItem("New-List"));
  if (existingEntries == null) existingEntries = [];
  let list = new List();
  existingEntries.forEach((item) => {
    list = new List(item.title);
    list.createListsFromLocalStorage(item.title);
  });
}

export function updateListsInLS(e) {
  const listArr = [];
  let titles = [...document.querySelectorAll(".list-text-item")];
  let list = new List();

  for (let i = 0; i < titles.length; i++) {
    list = new List(titles[i].value);
    listArr.push(list);
  }

  localStorage.setItem("New-List", JSON.stringify(listArr));
}
