document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.getElementById("menu");
  const navLinks = menu.querySelectorAll("li a");

  const getStartedButton = document.querySelector("button");
  const modal = document.getElementById("form-modal");
  const closeModalButton = document.getElementById("close-modal");

  // Function to toggle the menu visibility based on screen width
  function toggleMenu() {
    if (window.innerWidth <= 768) {
      // Only run if screen is tablet or mobile size
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
      hamburgerIcon.style.display =
        menu.style.display === "flex" ? "none" : "block";
      closeBtn.style.display = menu.style.display === "flex" ? "block" : "none";
    }
  }

  // Show menu on hamburger icon click (tablet/mobile only)
  hamburgerIcon.addEventListener("click", toggleMenu);

  // Hide menu on close button click (tablet/mobile only)
  closeBtn.addEventListener("click", toggleMenu);

  // Hide menu when a nav link is clicked (tablet/mobile only)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  // Show modal when "Get Started" button is clicked
  getStartedButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Hide modal when close button is clicked
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Hide modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Ensure menu is hidden and buttons are reset on screen resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.style.display = "flex"; // Show menu for desktop view
      hamburgerIcon.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      menu.style.display = "none"; // Hide menu for tablet/mobile view
      hamburgerIcon.style.display = "block";
      closeBtn.style.display = "none";
    }
  });

  // Syllabus toggle functionality
  const toggleSyllabusButton = document.getElementById("toggle-syllabus");
  const syllabusContent = document.getElementById("syllabus-content");

  toggleSyllabusButton.addEventListener("click", () => {
    syllabusContent.classList.toggle("hidden");

    // Toggle arrow direction in the button
    if (syllabusContent.classList.contains("hidden")) {
      toggleSyllabusButton.textContent = "▼";
    } else {
      toggleSyllabusButton.textContent = "▲";
    }
  });
});
