// js/auth.js

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Login Form Submission
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }
  
    // Registration Form Submission
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", handleRegistration);
    }
  
    // Password Reset Form Submission
    const resetForm = document.getElementById("reset-form");
    if (resetForm) {
      resetForm.addEventListener("submit", handlePasswordReset);
    }
  
    // Handle login form submission
    function handleLogin(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Get form data
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      // Here you would make an API call to the backend to verify login credentials
      if (email && password) {
        // Mocking API response for demo purposes
        console.log("Login credentials:", { email, password });
        // In a real application, you would check response and redirect to dashboard
        window.location.href = "dashboard.html"; // Redirect to dashboard after successful login
      } else {
        alert("Please enter both email and password.");
      }
    }
  
    // Handle registration form submission
    function handleRegistration(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Get form data
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      // Here you would make an API call to register the new user
      if (name && email && password) {
        // Mocking API response for demo purposes
        console.log("Registration details:", { name, email, password });
        // In a real application, you would check response and show success message
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page after registration
      } else {
        alert("Please fill out all fields.");
      }
    }
  
    // Handle password reset form submission
    function handlePasswordReset(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Get form data
      const email = document.getElementById("reset-email").value;
  
      // Here you would make an API call to initiate password reset
      if (email) {
        // Mocking API response for demo purposes
        console.log("Password reset email:", email);
        // In a real application, you would check response and show success message
        alert("Password reset link has been sent to your email.");
        window.location.href = "login.html"; // Redirect to login page after password reset request
      } else {
        alert("Please enter your email.");
      }
    }
  });
  