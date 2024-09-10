export default function addToLocalStorage(t) {
  let listItem = [...document.querySelectorAll(".list-item")];
  // let descriptions = document.querySelector(".list-description");

  console.log(t);

  let titles = listItem.map((title) => title.value);

  // let todoObj = {
  //   todoTitle: title,
  //   todoDescription: description,
  // };

  // localStorage.setItem("todoObj", JSON.stringify(todoObj));
}
