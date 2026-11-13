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


/*
========================================
WEEK 5 DAILY CHALLENGES
========================================
*/


// ======================================
// DAY 1: COLOR CHANGER
// ======================================

const colorButton = document.getElementById("color-btn");

function generateRandomColor() {

    const randomColor = Math.floor(
        Math.random() * 16777215
    );

    return "#" + randomColor.toString(16).padStart(6, "0");
}

colorButton.addEventListener("click", function() {

    const headings = document.querySelectorAll("h1, h2, h3");

    const randomColor = generateRandomColor();

    headings.forEach(function(heading) {
        heading.style.color = randomColor;
    });

});


// ======================================
// DAY 2: DYNAMIC ELEMENT CREATOR
// ======================================

const addParagraphBtn = document.getElementById("add-paragraph");

const paragraphContainer = document.getElementById("paragraph-container");

let paragraphCount = 0;

addParagraphBtn.addEventListener("click", function() {

    paragraphCount++;

    // Create paragraph container
    const div = document.createElement("div");

    div.className = "paragraph-item";

    // Create paragraph
    const paragraph = document.createElement("p");

    paragraph.textContent = `Paragraph ${paragraphCount}`;

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-paragraph";

    // Delete paragraph
    deleteButton.addEventListener("click", function() {
        div.remove();
    });

    // Add elements
    div.append(paragraph, deleteButton);

    paragraphContainer.appendChild(div);

});


// ======================================
// DAY 3: IMAGE REMOVER
// ======================================

const removeImagesBtn = document.getElementById("remove-images");

const toggleImagesBtn = document.getElementById("toggle-images");

const imageContainer = document.getElementById("image-container");

// Remove all images
removeImagesBtn.addEventListener("click", function() {

    const images = imageContainer.querySelectorAll("img");

    images.forEach(function(image) {
        image.remove();
    });

});

// Hide and show images
let imagesHidden = false;

toggleImagesBtn.addEventListener("click", function() {

    const images = imageContainer.querySelectorAll("img");

    imagesHidden = !imagesHidden;

    images.forEach(function(image) {
        image.style.display = imagesHidden ? "none" : "block";
    });

    toggleImagesBtn.textContent = imagesHidden
        ? "Show Images"
        : "Hide Images";

});


// ======================================
// DAY 4: CONTENT COPIER
// ======================================

const source = document.getElementById("source");

const target = document.getElementById("target");

const copyButton = document.getElementById("copy-btn");

// Copy using button
copyButton.addEventListener("click", function() {

    target.innerHTML = source.innerHTML;

});

// BONUS: Drag and Drop

source.addEventListener("dragstart", function(event) {

    event.dataTransfer.setData("text/plain", "copy-source");

});

target.addEventListener("dragover", function(event) {

    event.preventDefault();

    target.classList.add("drag-over");

});

target.addEventListener("dragleave", function() {

    target.classList.remove("drag-over");

});

target.addEventListener("drop", function(event) {

    event.preventDefault();

    target.classList.remove("drag-over");

    const data = event.dataTransfer.getData("text/plain");

    if (data === "copy-source") {
        target.innerHTML = source.innerHTML;
    }

});


// ======================================
// DAY 5: DARK MODE TOGGLE
// ======================================

const darkModeButton = document.getElementById("dark-mode-btn");

// Load saved preference
let darkMode = localStorage.getItem("darkMode") === "enabled";

// Apply saved preference
function applyDarkMode() {

    document.body.classList.toggle("dark-mode", darkMode);

    darkModeButton.textContent = darkMode
        ? "Disable Dark Mode"
        : "Enable Dark Mode";

}

// Initialize dark mode
applyDarkMode();

// Toggle dark mode
darkModeButton.addEventListener("click", function() {

    darkMode = !darkMode;

    // Save preference
    localStorage.setItem(
        "darkMode",
        darkMode ? "enabled" : "disabled"
    );

    applyDarkMode();

});


/*
========================================
END OF WEEK 5 DAILY CHALLENGES
========================================
*/
