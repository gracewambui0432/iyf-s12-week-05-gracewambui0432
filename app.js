// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Create Todo Element
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.action = "delete";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Render Todos
function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;
    });

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

// Add Todo
function addTodo(text) {
    const newTodo = {
        id: Date.now() + Math.random(),
        text: text,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();
    renderTodos();
}

// Toggle Todo
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }

        return todo;
    });

    saveTodos();
    renderTodos();
}

// Delete Todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    saveTodos();
    renderTodos();
}

// Update Stats
function updateStats() {
    const remaining = todos.filter(
        todo => !todo.completed
    ).length;

    itemsLeft.textContent =
        `${remaining} ${remaining === 1 ? "item" : "items"} left`;
}

// Filter Todos
function filterTodos(filter) {
    currentFilter = filter;

    filters.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderTodos();
}

// Edit Todo
function editTodo(todo, span) {
    const inputEdit = document.createElement("input");

    inputEdit.type = "text";
    inputEdit.className = "edit-input";
    inputEdit.value = todo.text;

    span.replaceWith(inputEdit);

    inputEdit.focus();
    inputEdit.select();

    let editing = true;

    function finishEditing(save) {
        if (!editing) return;
        editing = false;

        const newText = inputEdit.value.trim();

        if (save && newText !== "") {
            todo.text = newText;
            saveTodos();
        }

        renderTodos();
    }

    inputEdit.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            finishEditing(true);
        }

        if (event.key === "Escape") {
            finishEditing(false);
        }
    });

    inputEdit.addEventListener("blur", function() {
        finishEditing(true);
    });
}

// Form Submit Event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addTodo(text);

    input.value = "";
    input.focus();
});

// Todo List Click Event (Event Delegation)
todoList.addEventListener("click", function(event) {
    const li = event.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.dataset.action === "delete") {
        deleteTodo(id);
        return;
    }

    if (event.target.classList.contains("todo-text")) {
        toggleTodo(id);
    }
});

// Double Click to Edit
todoList.addEventListener("dblclick", function(event) {
    if (!event.target.classList.contains("todo-text")) {
        return;
    }

    const li = event.target.closest(".todo-item");
    const id = Number(li.dataset.id);

    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        editTodo(todo, event.target);
    }
});

// Filter Buttons
filters.forEach(button => {
    button.addEventListener("click", function() {
        filterTodos(button.dataset.filter);
    });
});

// Clear Completed
clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);

    saveTodos();
    renderTodos();
});

// Initialize Application
renderTodos();
