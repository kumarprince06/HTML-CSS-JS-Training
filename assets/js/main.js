document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.getElementById("menu");
  const navLinks = menu.querySelectorAll("li a");

  // Toggle menu visibility
  function toggleMenu() {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    hamburgerIcon.style.display =
      menu.style.display === "flex" ? "none" : "block";
    closeBtn.style.display = menu.style.display === "flex" ? "block" : "none";
  }

  // Show menu on hamburger icon click
  hamburgerIcon.addEventListener("click", toggleMenu);

  // Hide menu on close button click
  closeBtn.addEventListener("click", toggleMenu);

  // Hide menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
