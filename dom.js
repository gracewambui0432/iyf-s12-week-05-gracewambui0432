/*
====================================================
TASK 11: DOM MANIPULATION
====================================================
*/

// ================================================
// TASK 11.1: SELECTING ELEMENTS
// ================================================

// 1. getElementById
const header = document.getElementById("main-header");
console.log("Header:", header);

// 2. getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("Contents:", contents);

// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs:", paragraphs);

// 4. querySelector
const firstLink = document.querySelector(".nav-link");
console.log("First link:", firstLink);

// 5. querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("All links:", allLinks);

// Practice questions

const heading = document.querySelector("h1");
console.log("H1:", heading);

const contentElements = document.querySelectorAll(".content");
console.log("Content elements:", contentElements);

const contactForm = document.getElementById("contact-form");
console.log("Contact form:", contactForm);

const email = document.getElementById("email");
console.log("Email:", email);

const navItems = document.querySelectorAll(".nav-list li");
console.log("Navigation items:", navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("Last paragraph:", lastParagraph);


// ================================================
// TASK 11.2: TRAVERSING THE DOM
// ================================================

const nav = document.querySelector("nav");

// Parent
console.log("Nav parent:", nav.parentElement);

// Children
console.log("Nav children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next sibling:", article.nextElementSibling);
console.log("Previous sibling:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("Navigation descendants:", navLinks);

// Practice tasks

const headerElement = document.querySelector("header");
const headerNav = headerElement.querySelector("nav");
console.log("Nav inside header:", headerNav);

const firstLinkElement = document.querySelector(".nav-link");
console.log("Parent LI:", firstLinkElement.parentElement);

const articleElement = document.querySelector("article");
console.log("Article next sibling:", articleElement.nextElementSibling);

const ul = document.querySelector(".nav-list");
console.log("UL child items:", ul.children);

const footer = document.querySelector("footer");
console.log("Footer parent:", footer.parentElement);


// ================================================
// TASK 11.3: MODIFYING CONTENT
// ================================================

// Exercise 1: Text Content

const h1 = document.querySelector("h1");

console.log("Text content:", h1.textContent);
console.log("Inner text:", h1.innerText);

// Change heading
h1.textContent = "DOM Manipulation Practice";


// Exercise 2: HTML Content

const articleContent = document.querySelector("article");

console.log("Article HTML:", articleContent.innerHTML);

// Example of changing HTML
articleContent.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Security demonstration
const userInput = "<strong>This is user text</strong>";

// Safe: displays HTML characters as text
articleContent.textContent = userInput;


// Exercise 3: Attributes

const link = document.querySelector(".nav-link");

// Get attribute
console.log("Href:", link.getAttribute("href"));
console.log("Href property:", link.href);

// Set attribute
link.setAttribute("href", "https://developer.mozilla.org");

// Check attribute
console.log("Has target:", link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes demonstration
const dataElement = document.createElement("div");

dataElement.dataset.id = "123";
dataElement.dataset.category = "tech";
dataElement.dataset.newAttr = "value";

console.log("Data ID:", dataElement.dataset.id);
console.log("Category:", dataElement.dataset.category);


// Exercise 4: Styles

const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "20px"
});


// ================================================
// TASK 11.4: ADDING AND REMOVING ELEMENTS
// ================================================

// Exercise 1: Creating Elements

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

const articleForAdding = document.querySelector("article");

articleForAdding.appendChild(newParagraph);

// Insert before first paragraph
const firstParagraph = articleForAdding.querySelector("p");

if (firstParagraph) {
    firstParagraph.before(newParagraph);
}

// Modern insertion methods demonstration
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Another paragraph.";

articleForAdding.prepend(anotherParagraph);

const lastParagraphElement = document.createElement("p");
lastParagraphElement.textContent = "Last paragraph.";

articleForAdding.append(lastParagraphElement);


// Exercise 2: Removing Elements

// Demonstrate footer removal
// Uncomment when you want to remove the footer.

// const footerToRemove = document.querySelector("footer");
// footerToRemove.remove();

// Remove last navigation item
const navToEdit = document.querySelector("nav");

const lastLink = navToEdit.querySelector("li:last-child");

// Uncomment to remove it:
// lastLink.remove();

// Clear article demonstration
// Uncomment when you want to clear the article.

// while (articleForAdding.firstChild) {
//     articleForAdding.removeChild(articleForAdding.firstChild);
// }


// Exercise 3: Cloning Elements

const navItem = document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true);

clone.querySelector("a").textContent = "New Link";

document.querySelector(".nav-list").appendChild(clone);


// Build: Dynamic Navigation Items

function addNavItem(text, href) {

    const li = document.createElement("li");

    const anchor = document.createElement("a");

    anchor.textContent = text;
    anchor.href = href;
    anchor.className = "nav-link";

    li.appendChild(anchor);

    document.querySelector(".nav-list").appendChild(li);
}

// Test dynamic navigation
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


/*
====================================================
TASK 12: JAVASCRIPT EVENTS
====================================================
*/


// ================================================
// TASK 12.1: EVENT LISTENERS
// ================================================

// Create button
const button = document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);

// Basic event listener
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);


// Exercise: Different Event Types

// Mouse events
button.addEventListener("dblclick", function() {
    console.log("Double clicked!");
});

button.addEventListener("mouseenter", function() {
    console.log("Mouse entered!");
});

button.addEventListener("mouseleave", function() {
    console.log("Mouse left!");
});


// Build: Click Counter

let count = 0;

const counterDisplay = document.createElement("h2");
counterDisplay.textContent = "Count: 0";

const increaseButton = document.createElement("button");
increaseButton.textContent = "+";

const decreaseButton = document.createElement("button");
decreaseButton.textContent = "-";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

document.body.append(
    counterDisplay,
    increaseButton,
    decreaseButton,
    resetButton
);

// Increase
increaseButton.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
});

// Decrease
decreaseButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
    }

    counterDisplay.textContent = `Count: ${count}`;
});

// Reset
resetButton.addEventListener("click", function() {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`;
});


// ================================================
// TASK 12.2: THE EVENT OBJECT
// ================================================

// Mouse click event
document.addEventListener("click", function(event) {

    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);

    console.log("Position X:", event.clientX);
    console.log("Position Y:", event.clientY);

});

// Keyboard event
document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);
    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);

});


// Build: Keyboard Shortcuts

const shortcutForm = document.querySelector("#contact-form");

// Ctrl + S: Show saved message
// Escape: Clear form
// Ctrl + Enter: Submit form

document.addEventListener("keydown", function(event) {

    // Ctrl + S
    if (event.ctrlKey && event.key.toLowerCase() === "s") {

        event.preventDefault();

        alert("Saved!");

    }

    // Escape
    if (event.key === "Escape" && shortcutForm) {

        shortcutForm.reset();

    }

    // Ctrl + Enter
    if (event.ctrlKey && event.key === "Enter" && shortcutForm) {

        event.preventDefault();

        shortcutForm.requestSubmit();

    }

});


// ================================================
// TASK 12.3: EVENT BUBBLING & DELEGATION
// ================================================

// Exercise 1: Event Bubbling

// Create nested elements

const grandparent = document.createElement("div");
grandparent.id = "grandparent";
grandparent.textContent = "Grandparent";

const parent = document.createElement("div");
parent.id = "parent";
parent.textContent = "Parent";

const child = document.createElement("div");
child.id = "child";
child.textContent = "Child";

grandparent.appendChild(parent);
parent.appendChild(child);

document.body.appendChild(grandparent);

// Grandparent listener
grandparent.addEventListener("click", function() {
    console.log("Grandparent clicked");
});

// Parent listener
parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

// Child listener
child.addEventListener("click", function() {
    console.log("Child clicked");
});


// Exercise 2: Event Delegation

// Build task list

const taskHeading = document.createElement("h2");
taskHeading.textContent = "My Task List";

const taskForm = document.createElement("form");

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Enter a task";
taskInput.required = true;

const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";

taskForm.append(taskInput, addTaskButton);

const taskList = document.createElement("ul");

taskList.id = "task-list";

document.body.append(
    taskHeading,
    taskForm,
    taskList
);

// Add task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-task";

    li.append(span, deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

});

// ONE delegated click listener
taskList.addEventListener("click", function(event) {

    const li = event.target.closest("li");

    if (!li || !taskList.contains(li)) return;

    // Delete task
    if (event.target.classList.contains("delete-task")) {

        li.remove();

        return;

    }

    // Toggle completed
    li.classList.toggle("completed");

});


// ================================================
// TASK 12.4: FORM HANDLING
// ================================================

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");


// Show error
function showError(input, message) {

    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {

        error = document.createElement("p");

        error.className = "error-message";

        input.insertAdjacentElement("afterend", error);

    }

    error.textContent = message;

}


// Clear error
function clearError(input) {

    input.classList.remove("error");

    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {

        error.remove();

    }

}


// Validate name
nameInput.addEventListener("input", function() {

    const value = nameInput.value.trim();

    if (value.length < 2) {

        showError(nameInput, "Name must be at least 2 characters");

    } else {

        clearError(nameInput);

    }

});


// Validate email
emailInput.addEventListener("input", function() {

    const value = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {

        showError(emailInput, "Please enter a valid email");

    } else {

        clearError(emailInput);

    }

});


// Check all fields
function isValid(data) {

    const validName = data.name.trim().length >= 2;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validEmail = emailRegex.test(data.email.trim());

    return validName && validEmail;

}


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    if (isValid(data)) {

        alert("Form submitted successfully!");

        form.reset();

        clearError(nameInput);

        clearError(emailInput);

    } else {

        if (data.name.trim().length < 2) {

            showError(nameInput, "Name must be at least 2 characters");

        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {

            showError(emailInput, "Please enter a valid email");

        }

    }

});


// ================================================
// END OF TASK 11 AND TASK 12
// ================================================
