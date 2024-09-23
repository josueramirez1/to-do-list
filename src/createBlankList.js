export default function createBlankList(lists) {
  let div = document.createElement("div");
  div.classList.add("list-title");
  lists.appendChild(div);

  let leftDiv = document.createElement("div");
  div.appendChild(leftDiv);
  let i = document.createElement("i");
  leftDiv.appendChild(i);

  i.classList.add("fa-solid");
  i.classList.add("fa-list");
  i.style = "color: #e663bf";

  let input = document.createElement("input");
  leftDiv.appendChild(input);
  input.placeholder = "New List";
  input.classList.add("list-text-item");

  let rightDiv = document.createElement("div");
  div.appendChild(rightDiv);
  let trash = document.createElement("i");
  rightDiv.appendChild(trash);
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash");
}
