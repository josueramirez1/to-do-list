export default function addToLocalStorage() {
  let title = document.querySelector(".list-item").value;
  let description = document.querySelector(".list-description").value;

  let todoObj = {
    todoTitle: title,
    todoDescription: description,
  };

  localStorage.setItem("todoObj", JSON.stringify(todoObj));
}
