// Custom DOM Selection Practice

// 1. Selecting the main heading
const mainHeading = document.getElementsByTagName("h1")[0];
console.log("H1:", mainHeading);

// 2. Getting all content paragraphs
const contentBlocks = document.getElementsByClassName("content");
console.log("Content blocks:", contentBlocks);

// 3. Finding the contact form
const myForm = document.getElementById("contact-form");
console.log("Form:", myForm);

// 4. Grabbing the email field
const userEmailInput = document.getElementById("email");
console.log("Email input:", userEmailInput);

// 5. Navigation list items
const navItems = document.querySelectorAll(".nav-list li");
console.log("Nav items:", navItems);

// 6. First navigation link
const firstLinkItem = document.querySelector(".nav-link");
console.log("First link:", firstLinkItem);

// 7. Final paragraph in the article
const allArticleParagraphs = document.querySelectorAll("article p");
const finalParagraph = allArticleParagraphs[allArticleParagraphs.length - 1];
console.log("Last paragraph:", finalParagraph);
