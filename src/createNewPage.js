export default class Page {
  constructor(title) {
    this.title = title;
  }

  static createNewPage() {
    return (newColumnBody = `<div class="current-list-title"><i class="fa-solid fa-inbox fa-xl" style="color: #74c0fc"></i><h2>${this.title}</h2></div><div class="current-list-items"></div>`);
  }
}
