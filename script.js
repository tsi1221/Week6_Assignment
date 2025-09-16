// ---------------------------
// Custom Form Validation
// ---------------------------
const form = document.getElementById("myForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent actual form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    let message = "";

    // Validation logic
    if (username === "") {
        message += "Username is required. ";
    }

    if (email === "") {
        message += "Email is required. ";
    } else if (!email.includes("@")) {
        message += "Email must be valid. ";
    }

    if (message !== "") {
        formMessage.style.color = "red";
        formMessage.textContent = message;
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
    }
});

// ---------------------------
// Interactive Feature 1: Change Color
// ---------------------------
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

colorBtn.addEventListener("click", function() {
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorText.style.color = randomColor;
});

// ---------------------------
// Interactive Feature 2: Toggle Visibility
// ---------------------------
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function() {
    if (toggleText.style.display === "none") {
        toggleText.style.display = "block";
    } else {
        toggleText.style.display = "none";
    }
});
