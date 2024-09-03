import "./css/styles.css";
import List from "./list.js";
import Todo from "./todo.js";

function createTodo() {
  // This variable will create an object based on information it receives
  const newTodo = new Todo(
    "Walk the dogs",
    "Bella needs her exercise",
    "today",
    "high"
  );
  const currentListItem = document.querySelector(".current-list-item");
  // div that contains label and p
  const currentListText = document.createElement("div");
  currentListText.classList.add("current-list-text");
  // input

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "to-do");
  input.setAttribute("id", "to-do");
  // label
  const label = document.createElement("label");
  label.setAttribute("for", "to-do");
  label.textContent;
  label.classList.add("list-item");
}

createTodo();

{
  /*
            <div class="current-list-text">
            <input type="checkbox" name="to-do" id="to-do" />
              <label for="to-do" class="list-item">Add to-do</label>
              <p class="list-description">Type description...</p>
            </div> */
}
