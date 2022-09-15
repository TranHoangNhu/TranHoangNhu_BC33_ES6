window.onload = function () {
  getToDoStorage("#todo", "unComplete", toDoList);
  getToDoStorage("#completed", "completed", completedList);
  styleCompleted();
};

let toDoList = [];
let completedList = [];
// onclick event handler
document.querySelector("#addItem").onclick = () => {
  let inputToDo = document.querySelector("#newTask");
  if (!inputToDo.value) {
    alert("Ô thông tin không được để trống !!!");
    return;
  }
  toDoList.push({ name: inputToDo.value });
  inputToDo.value = "";
  console.log(toDoList);
  renderList("#todo", toDoList);
  saveToDoStorage(toDoList, "unComplete");
};

// function libraries
function renderList(toDoSelector, arr) {
  let result = "";
  for (let index = 0; index < arr.length; index++) {
    let conTroThis = arr[index];
    console.log(arr.length);
    result += `<li id="${conTroThis.name}">
          <p>${conTroThis.name}</p>                 
          <div class="buttons">
          <button onclick="delToDo('${conTroThis.name}')"> 
          <i class="far fa-trash-alt"></i>
          </button>
          <button onclick="completeClick('${conTroThis.name}')">
          <i class="fas fa-check-circle"></i>
          </button>
          </div>
      </li> `;
  }
  document.querySelector(toDoSelector).innerHTML = result;
}

function saveToDoStorage(arr, nameStorage) {
  localStorage.setItem(nameStorage, JSON.stringify(arr));
}

function getToDoStorage(toDoSelector, nameStorage, arr) {
  let ListJSON = localStorage.getItem(nameStorage);
  if (ListJSON === null) return;
  let ListLocal = JSON.parse(ListJSON);
  arr = ListLocal;
  renderList(toDoSelector, arr);
}

window.delList = (idClick) => {
  // Sử dụng arrow function để khỏi undefined
  if (confirm("Bạn có thực sự muốn xóa nó không?")) {
    arr = arr.filter((conTroThis) => conTroThis.name !== idClick);
    renderList("#todo", arr);
    saveToDoStorage(arr, "unComplete");
  }
};

window.completeClick = (idclick) => {
  const UlNode = document.querySelector("ul.todo#completed");
  let LiNode = document.getElementById(idclick);
  UlNode.insertBefore(LiNode, UlNode.children[0]);
  let ListValue = document.querySelectorAll("#completed li p")[0].innerText;
  completedList.push({ name: ListValue });
  renderList("#completed", completedList);
  saveToDoStorage(completedList, "completed");
  // delCompleted(idclick);
  styleCompleted()
};

function styleCompleted() {
  let myNodelist = document.querySelectorAll('#completed li button:nth-child(2)');
  if(myNodelist.length == 0){
    return;
  }
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].className = 'complete';
  }
}