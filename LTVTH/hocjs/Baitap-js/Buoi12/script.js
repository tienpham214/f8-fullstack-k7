var taskList = document.getElementById("task-list");
var deleteModal = document.getElementById("deleteModal");
var emptyInputModal = document.getElementById("emptyInputModal");
var taskTodelete = null;

// Load tasks from local storage on page load
window.onload = function () {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => {
    addTask(taskText);
  });
};

// Save tasks to local storage
function saveTasks() {
  var tasks = [];
  document
    .querySelectorAll('.task-item input[type="text"]')
    .forEach((taskInput) => {
      tasks.push(taskInput.value);
    });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(taskText = "") {
  var taskInput = document.getElementById("new-task");
  var text = taskText || taskInput.value.trim();
  if (text === "") {
    emptyInputModal.style.display = "block";
    return;
  }

  var listItem = document.createElement("li");
  listItem.className = "task-item";
  listItem.draggable = true;
  listItem.innerHTML = `
          <input type="text" value="${text}" readonly>
          <div class="actions">
              <button onclick="editTask(this)">✏️</button>
              <button onclick="confirmdelete(this)">🗑️</button>
          </div>
      `;
  listItem.addEventListener("click", toggleCompvare);
  listItem.addEventListener("dragstart", dragStart);
  listItem.addEventListener("dragover", dragOver);
  listItem.addEventListener("drop", drop);
  taskList.appendChild(listItem);

  if (!taskText) {
    taskInput.value = "";
  }
  saveTasks();
}

function editTask(button) {
  var taskItem = button.parentElement.parentElement;
  var taskInput = taskItem.querySelector('input[type="text"]');
  if (taskInput.readOnly) {
    taskInput.readOnly = false;
    taskInput.focus();
    button.textContent = "💾";
  } else {
    taskInput.readOnly = true;
    button.textContent = "✏️";
    saveTasks();
  }
}

function confirmdelete(button) {
  taskTodelete = button.parentElement.parentElement;
  deleteModal.style.display = "block";
}

function closeModal() {
  deleteModal.style.display = "none";
  taskTodelete = null;
}

function closeEmptyInputModal() {
  emptyInputModal.style.display = "none";
}

function deleteTask() {
  if (taskTodelete) {
    taskList.removeChild(taskTodelete);
    closeModal();
    saveTasks();
  }
}

function toggleCompvare(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "BUTTON")
    return;
  var taskItem = event.currentTarget;
  taskItem.classList.toggle("compvared");
  saveTasks();
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.outerHTML);
  event.dataTransfer.effectAllowed = "move";
  event.target.classList.add("dragging");
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";

  var taskList = document.getElementById("task-list");
  var bounding = taskList.getBoundingClientRect();
  var offset = bounding.y + bounding.height - event.clientY;

  if (offset < 20) {
    taskList.scrollTop += 10;
  } else if (event.clientY - bounding.y < 20) {
    taskList.scrollTop -= 10;
  }
}

function drop(event) {
  event.preventDefault();
  var draggingItem = document.querySelector(".dragging");
  taskList.removeChild(draggingItem); // Remove the dragged item from its original position
  taskList.insertBefore(draggingItem, event.currentTarget); // Insert the dragged item before the drop target
  draggingItem.classList.remove("dragging");
  saveTasks();
}
