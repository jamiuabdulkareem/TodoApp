"use strict";

const taskContainer = document.querySelector(".task");
const taskInput = document.querySelector(".task__input");
const taskBtn = document.querySelector(".task__btn");
const deleteBtn = document.querySelector("#btnDele");
const listItem = document.getElementById("list");

let task = [];

// console.log(deleteBtn);

const displayTask = function (display) {
  taskContainer.innerHTML = "";

  display.forEach(function (list) {
    const html = `<ul class="task__list">
    <li class="task__list--item">
      <p id="list">${list}</p>
      <div id="btnDele">
      <ion-icon class="delete__btn" name="trash-outline"></ion-icon>
      </div>
    </li>
  </ul>`;

    taskContainer.insertAdjacentHTML("afterbegin", html);

    document.querySelector("#btnDele").addEventListener("click", function () {
      task.shift();
      displayTask(task);
    });
  });
};

displayTask(task);

taskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const addTask = taskInput.value;
  task.push(addTask);

  displayTask(task);
  taskInput.value = "";
});
