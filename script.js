document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  // 1. Mobile Menu Toggle Logic
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
    console.log("Mobile Menu Toggled");
  });

  // 2. Active Link Switching Logic
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active-link' class from all links
      navLinks.forEach((item) => item.classList.remove("active-link"));

      // Add 'active-link' class to the clicked link
      this.classList.add("active-link");
    });
  });
});
