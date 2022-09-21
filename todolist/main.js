import { ToDo } from "./todoClass.js";

window.onload = function () {
  getLocalStorage();
  renderList("#todo", toDoList);
  renderListCompleted("#completed", completedList);
  styleCompleted();
};

// arr default
let toDoList = [];
let toDo = new ToDo();
let completed = new ToDo();
let completedList = [];

// onclick event handler
document.querySelector("#addItem").onclick = function () {
  let inputToDo = document.querySelector("#newTask");
  if (!inputToDo.value) {
    alert("Ô thông tin không được để trống !!!");
    return;
  }
  let id = String(Date.now());
  let name = String(inputToDo.value);
  toDo = { id, name };
  toDoList.push(toDo);
  inputToDo.value = "";
  console.log(toDoList);
  renderList("#todo", toDoList);
  saveLocalStorage();
};

const buttonFilter = document.querySelectorAll("#two, #three");
for (const button of buttonFilter) {
  button.addEventListener("click", function () {
    toDoList.reverse();
    console.log(toDoList);
    renderList("#todo", toDoList);
  });
}

// function libraries
let renderList = (toDoSelector, arr) => {
  let result = "";
  for (let conTroThis of arr) {
    result += `
    <li>${conTroThis.name}
    <div>
    <i class="far fa-trash-alt" onclick="delList('${conTroThis.id}')" style="cursor:pointer"></i>
    <i class="far fa-check-circle" onclick="completeClick('${conTroThis.id}')" style="cursor:pointer"></i>
    </div>
    </li>`;
  }
  document.querySelector(toDoSelector).innerHTML = result;
};

let saveLocalStorage = () => {
  localStorage.setItem("unComplete", JSON.stringify(toDoList));
  localStorage.setItem("completed", JSON.stringify(completedList));
};

let getLocalStorage = () => {
  if (localStorage.getItem("unComplete")) {
    toDoList = JSON.parse(localStorage.getItem("unComplete"));
  }
  if (localStorage.getItem("completed")) {
    completedList = JSON.parse(localStorage.getItem("completed"));
  }
};

window.delList = (idClick) => {
  toDoList = toDoList.filter((conTroThis) => conTroThis.id !== idClick);
  saveLocalStorage();
  renderList("#todo", toDoList);
};

window.completeClick = (idClick) => {
  // const UlNode = document.querySelector("ul.todo#completed");
  // let LiNode = document.getElementById(idclick);
  // renderListCompleted("#completed", completedList);
  // UlNode.insertBefore(LiNode, UlNode.children[0]);
  // let ListValue = document.querySelectorAll("#completed li p")[0].innerText;
  completed = toDoList.find((conTroThis) => conTroThis.id === idClick);
  completedList.unshift(completed);
  renderListCompleted("#completed", completedList);
  delList(idClick);
  saveLocalStorage();
  styleCompleted();
  // location.reload();
};

let renderListCompleted = (toDoSelector, arr) => {
  let result = "";
  for (let conTroThis of arr) {
    result += `<li>
          <p>${conTroThis.name}</p>                 
          <div class="buttons">
          <button onclick="delListCompleted('${conTroThis.id}')"> 
          <i class="far fa-trash-alt"></i>
          </button>
          <button>
          <i class="fas fa-check-circle"></i>
          </button>
          </div>
      </li> `;
  }
  document.querySelector(toDoSelector).innerHTML = result;
};

window.delListCompleted = (idClick) => {
  completedList = completedList.filter(
    (conTroThis) => conTroThis.id !== idClick
  );
  saveLocalStorage();
  renderListCompleted("#completed", completedList);
  styleCompleted();
};

function styleCompleted() {
  let myNodelist = document.querySelectorAll(
    "#completed li button:nth-child(2)"
  );
  if (myNodelist.length == 0) {
    return;
  }
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].className = "complete";
  }
}
