// Get form elements
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting until validation

  // Validate Name (ensure it's not empty)
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return; 
  }

  // Validate Email format (basic validation)
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue === "" || !emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    return; 
  }

  // If all validations pass, you can proceed with form submission
  alert("Form submitted successfully!");
  // You can also submit the form data via AJAX or other methods here if needed
});
