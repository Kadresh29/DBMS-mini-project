// alerts.js

document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const notificationForm = document.getElementById('notification-form');
    const alertTypeFilter = document.getElementById('alert-type-filter');
    const alertsList = document.getElementById('alerts-list');
    const budgetAlert50 = document.getElementById('budget-alert-50');
    const budgetAlert80 = document.getElementById('budget-alert-80');
    const budgetAlert100 = document.getElementById('budget-alert-100');
    const paymentReminderDay = document.getElementById('payment-reminder-day');
    const paymentReminderBefore = document.getElementById('payment-reminder-before');
  
    // Sample alerts data (usually would be fetched from a database)
    const alertsData = [
      {
        type: "budget",
        message: "You've exceeded your Food budget by $300",
        date: "Today, 9:30 AM",
        icon: "fas fa-exclamation-triangle",
        level: "danger"
      },
      {
        type: "payment",
        message: "Your electricity bill is due tomorrow.",
        date: "Yesterday, 3:00 PM",
        icon: "fas fa-calendar-alt",
        level: "warning"
      },
      {
        type: "transaction",
        message: "A new transaction of $50 was made to your account.",
        date: "Last week, 2:00 PM",
        icon: "fas fa-exchange-alt",
        level: "info"
      }
    ];
  
    // Function to render alerts
    function renderAlerts(filteredAlerts) {
      alertsList.innerHTML = ''; // Clear the current alerts
      filteredAlerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', `alert-${alert.level}`);
  
        alertDiv.innerHTML = `
          <div class="alert-header">
            <strong><i class="${alert.icon}"></i> ${alert.type === "budget" ? "Budget Limit Reached" : alert.type === "payment" ? "Payment Reminder" : "New Transaction"}</strong>
            <span class="alert-date">${alert.date}</span>
          </div>
          <p>${alert.message}</p>
        `;
  
        alertsList.appendChild(alertDiv);
      });
    }
  
    // Filter alerts based on selected type
    alertTypeFilter.addEventListener('change', function () {
      const selectedFilter = alertTypeFilter.value;
      let filteredAlerts;
  
      if (selectedFilter === "all") {
        filteredAlerts = alertsData;
      } else {
        filteredAlerts = alertsData.filter(alert => alert.type === selectedFilter);
      }
  
      renderAlerts(filteredAlerts);
    });
  
    // Save notification preferences
    notificationForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent page reload on form submission
  
      // Collect selected preferences
      const preferences = {
        budgetAlert50: budgetAlert50.checked,
        budgetAlert80: budgetAlert80.checked,
        budgetAlert100: budgetAlert100.checked,
        paymentReminderDay: paymentReminderDay.checked,
        paymentReminderBefore: paymentReminderBefore.checked
      };
  
      // For demo purposes, log the preferences to the console
      console.log('Saved preferences:', preferences);
  
      // You can implement API calls to save preferences to the server here
      alert("Your preferences have been saved!");
    });
  
    // Initial render with all alerts
    renderAlerts(alertsData);
  });
  