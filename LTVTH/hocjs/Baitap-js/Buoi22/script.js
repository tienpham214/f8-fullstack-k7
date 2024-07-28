// Variables to store DOM elements
const addTodoButton = document.getElementById("add-todo");
const showFinishedButton = document.getElementById("show-finished");
const formWrapper = document.querySelector(".form-wrapper");
const closeFormButton = document.getElementById("close-form");
const formAdd = document.getElementById("form-add");
const unFinishedTodos = document.getElementById("un-finished");
const finishedTodos = document.getElementById("finished");
const completedCountSpan = document.querySelector("#show-finished span");

// Fetch initial todos from db.json (assumed to be served by a local server on port 3000)
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://ldjnnm-8080.csb.app/todos/");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const todos = await response.json();
    todos.forEach((todo) => {
      const status = todo.status === "finished" ? "finished" : "unfinished";
      const todoTemplate = createTodoTemplate(todo.id, todo.title, status);
      if (status === "finished") {
        finishedTodos.insertAdjacentHTML("beforeend", todoTemplate);
      } else {
        unFinishedTodos.insertAdjacentHTML("beforeend", todoTemplate);
      }
    });
    updateCompletedCount();
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
});

// Event listeners
addTodoButton.addEventListener("click", () => {
  formWrapper.classList.remove("hidden");
});

closeFormButton.addEventListener("click", () => {
  formWrapper.classList.add("hidden");
});

formAdd.addEventListener("submit", async (e) => {
  e.preventDefault();
  const todoInput = formAdd.querySelector('input[name="todo"]');
  const todoTitle = todoInput.value.trim();
  if (todoTitle) {
    try {
      const response = await fetch("https://ldjnnm-8080.csb.app/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todoTitle,
          status: "unfinished",
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      const newTodo = await response.json();
      const todoTemplate = createTodoTemplate(
        newTodo.id,
        newTodo.title,
        "unfinished"
      );
      unFinishedTodos.insertAdjacentHTML("beforeend", todoTemplate);
      formWrapper.classList.add("hidden");
      todoInput.value = "";
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  }
});

showFinishedButton.addEventListener("click", () => {
  finishedTodos.classList.toggle("hidden");
});

// Function to create a todo template
function createTodoTemplate(id, title, status) {
  const template = `
    <div class="d-flex justify-content-between align-items-center p-4 border rounded border-secondary border-opacity-50 bg-white mt-2 mx-auto">
      <span>${title}</span>
      <div class="d-flex gap-2">
        <button class="d-flex justify-content-center align-items-center btn btn-danger delete-btn" data-id="${id}" style="width: 40px; height: 40px">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class="d-flex justify-content-center align-items-center btn btn-primary edit-btn" data-id="${id}" style="width: 40px; height: 40px">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        ${
          status === "unfinished"
            ? `
          <button class="d-flex justify-content-center align-items-center btn btn-secondary mark-finished-btn" data-id="${id}" style="width: 40px; height: 40px">
            <i class="fa-solid fa-check-to-slot"></i>
          </button>
        `
            : `
          <button class="d-flex justify-content-center align-items-center btn btn-success unmark-finished-btn" data-id="${id}" style="width: 40px; height: 40px">
            <i class="fa-solid fa-check-to-slot"></i>
          </button>
        `
        }
      </div>
    </div>
  `;
  return template;
}

// Event delegation for delete, edit, mark finished and unmark finished buttons
document.addEventListener("click", async (e) => {
  const target = e.target;
  if (target.classList.contains("delete-btn")) {
    const todoId = target.getAttribute("data-id");
    try {
      const response = await fetch(
        `https://ldjnnm-8080.csb.app/todos//${todoId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      target.closest(".border").remove();
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  } else if (target.classList.contains("edit-btn")) {
    const todoId = target.getAttribute("data-id");
    const todoSpan = target.closest(".border").querySelector("span");
    const newTitle = prompt("Enter new title:", todoSpan.textContent);
    if (newTitle) {
      try {
        const response = await fetch(
          `https://ldjnnm-8080.csb.app/todos//${todoId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: newTitle,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update todo");
        }
        todoSpan.textContent = newTitle;
      } catch (error) {
        console.error("Error updating todo:", error.message);
      }
    }
  } else if (target.classList.contains("mark-finished-btn")) {
    const todoId = target.getAttribute("data-id");
    try {
      const response = await fetch(
        `https://ldjnnm-8080.csb.app/todos//${todoId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "finished",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to mark todo as finished");
      }
      const todoContainer = target.closest(".border");
      todoContainer.remove();
      const todoTemplate = createTodoTemplate(
        todoId,
        todoContainer.querySelector("span").textContent,
        "finished"
      );
      finishedTodos.insertAdjacentHTML("beforeend", todoTemplate);
      updateCompletedCount();
    } catch (error) {
      console.error("Error marking todo as finished:", error.message);
    }
  } else if (target.classList.contains("unmark-finished-btn")) {
    const todoId = target.getAttribute("data-id");
    try {
      const response = await fetch(
        `https://ldjnnm-8080.csb.app/todos//${todoId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "unfinished",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to unmark todo as finished");
      }
      const todoContainer = target.closest(".border");
      todoContainer.remove();
      const todoTemplate = createTodoTemplate(
        todoId,
        todoContainer.querySelector("span").textContent,
        "unfinished"
      );
      unFinishedTodos.insertAdjacentHTML("beforeend", todoTemplate);
      updateCompletedCount();
    } catch (error) {
      console.error("Error unmarking todo as finished:", error.message);
    }
  }
});

// Function to update completed count
async function updateCompletedCount() {
  try {
    const response = await fetch(
      "https://ldjnnm-8080.csb.app/todos/?status=finished"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch completed todos");
    }
    const completedTodos = await response.json();
    completedCountSpan.textContent = completedTodos.length;
  } catch (error) {
    console.error("Error updating completed count:", error.message);
  }
}
