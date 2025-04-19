document.addEventListener("DOMContentLoaded", function () {
    // User profile dropdown toggle
    const profileToggle = document.getElementById("profile-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (profileToggle && dropdownMenu) {
        profileToggle.addEventListener("click", function (e) {
            e.stopPropagation(); // prevent click from bubbling to body
            dropdownMenu.classList.toggle("show");
        });

        // Close dropdown if clicked outside
        document.addEventListener("click", function (e) {
            if (!dropdownMenu.contains(e.target) && !profileToggle.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }

    // Handle Edit Username
    const editUsernameBtn = document.getElementById("edit-username-btn");

    if (editUsernameBtn) {
        editUsernameBtn.addEventListener("click", function () {
            // Redirect to the profile page to edit username
            window.location.href = "edit-username.html"; // Update with actual profile page URL
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
            window.location.href = "index.html";
        });
    }
});
