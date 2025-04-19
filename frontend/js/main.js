document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle for hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    // Hide sidebar if overlay is clicked
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  // User profile dropdown toggle
  const profileToggle = document.getElementById("profile-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (profileToggle && dropdownMenu) {
    profileToggle.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent click from bubbling to body
      dropdownMenu.classList.toggle("show");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
      if (!dropdownMenu.contains(e.target) && !profileToggle.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }

  // Redirect to Profile page when "Edit Profile" is clicked
  const editProfileLink = document.querySelector('.dropdown-item');
  if (editProfileLink) {
    editProfileLink.addEventListener('click', function () {
      window.location.href = 'profile.html'; // Redirect to profile page
    });
  }

  // Logout functionality
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Simulate logout process
      localStorage.clear(); // Clear any saved user data
      sessionStorage.clear();
      alert("You have been logged out.");

      // Redirect to login page
      window.location.href = "index.html"; // Replace with actual login page if necessary
    });
  }
});
