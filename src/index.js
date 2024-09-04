import "./css/styles.css";
import List from "./list.js";
import Todo from "./todo.js";

document.addEventListener("click", (e) => {
  if (e.target.matches(".second-column-body")) Todo.createTodo();
  const title = document.querySelector(".list-item");
  const description = document.querySelector(".list-description");
  const array = [];
  title.addEventListener("change", (e) => {
    let newTitle = title.value;
    const newTodo = new Todo(newTitle);
    console.log(newTodo.title);
  });
  // description.addEventListener("change", (e) => {
  //   let newDescription = description.value;
  // });
});
