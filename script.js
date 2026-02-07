/**
 * Age of Sosaria - Navigation Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-item");

  /**
   * Toggles the mobile menu
   */
  function toggleMenu() {
    const isHidden = navLinksContainer.classList.contains("hidden");

    if (isHidden) {
      navLinksContainer.classList.remove("hidden");
      navLinksContainer.classList.add("mobile-menu-open");
    } else {
      navLinksContainer.classList.add("hidden");
      navLinksContainer.classList.remove("mobile-menu-open");
    }
  }

  /**
   * Closes the mobile menu
   */
  function closeMenu() {
    navLinksContainer.classList.add("hidden");
    navLinksContainer.classList.remove("mobile-menu-open");
  }

  // 1. Menu button click
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // 2. Nav link click (Handle Active State & Close Menu)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all
      navLinks.forEach((item) => item.classList.remove("nav-link-active"));
      // Add to clicked one
      this.classList.add("nav-link-active");

      // Close if on mobile
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // 3. Click outside to close
  document.addEventListener("click", (e) => {
    if (
      !navLinksContainer.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // 4. Resize fix
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinksContainer.classList.remove("hidden");
      navLinksContainer.classList.remove("mobile-menu-open");
    } else {
      navLinksContainer.classList.add("hidden");
    }
  });
});
