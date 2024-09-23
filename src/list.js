import createBlankList from "./createBlankList";
import createSavedList from "./createSavedList";

export default class List {
  constructor(title) {
    this.title = title;
  }

  static createLocalStorageArray() {
    let listArrayOfObjects = [];
    localStorage.setItem("New-List", JSON.stringify(listArrayOfObjects));
  }

  static createBlankLists(lists) {
    createBlankList(lists);
  }

  createListsFromLocalStorage(title) {
    createSavedList(title);
  }
}
