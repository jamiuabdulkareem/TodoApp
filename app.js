"use strict";

const taskContainer = document.querySelector(".task");
const taskInput = document.querySelector(".task__input");
const taskBtn = document.querySelector(".task__btn");

let task = [];

const displayTask = function (display) {
  taskContainer.innerHTML = "";

  display.forEach(function (list) {
    const html = `<ul class="task__list">
    <li class="task__list--item">
      <p>${list}</p>
      <ion-icon class="delete__btn" name="trash-outline"></ion-icon>
    </li>
  </ul>`;

    taskContainer.insertAdjacentHTML("afterbegin", html);
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
