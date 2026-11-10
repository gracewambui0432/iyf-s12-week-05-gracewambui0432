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




// ==========================================
// 4. Text, HTML, Attributes, and Styles
// ==========================================

// Exercise 1: Text Content
const mainTitle = document.querySelector("h1");
console.log("Original textContent:", mainTitle.textContent);
console.log("Original innerText:", mainTitle.innerText);

// Modifying the text
mainTitle.textContent = "DOM Manipulation Practice";


// Exercise 2: HTML Content
const mainArticle = document.querySelector("article");
// Safely updating inner HTML (use innerHTML only for trusted content, textContent for user input)
mainArticle.innerHTML = `
    <h2 class="title">Updated Article Heading</h2>
    <p class="content">This content was dynamically updated via JavaScript!</p>
`;


// Exercise 3: Attributes
const sampleLink = document.querySelector(".nav-link");

// Reading and setting attributes
console.log("Current href:", sampleLink.getAttribute("href"));
sampleLink.setAttribute("href", "https://developer.mozilla.org");
sampleLink.setAttribute("target", "_blank");

// Checking and removing attributes
console.log("Has target attribute?", sampleLink.hasAttribute("target"));
// sampleLink.removeAttribute("target"); // Uncomment to remove


// Exercise 4: Styles
const containerBox = document.querySelector(".container");

// Modifying inline styles directly
containerBox.style.backgroundColor = "#f9f9f9";
containerBox.style.borderRadius = "8px";

// Applying multiple styles at once using Object.assign
Object.assign(containerBox.style, {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "10px auto"
});
