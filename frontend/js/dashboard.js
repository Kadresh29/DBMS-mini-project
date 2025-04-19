// js/dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    // Initialize Charts
    initializeCharts();
  
    // Function to initialize and render charts
    function initializeCharts() {
      // Expenses Pie Chart
      const expensesPieChart = document.getElementById("expensesPieChart");
      if (expensesPieChart) {
        new Chart(expensesPieChart, {
          type: 'pie',
          data: {
            labels: ['Food', 'Entertainment', 'Transportation', 'Shopping'], // Example categories
            datasets: [{
              data: [850, 160, 450, 120], // Example data values
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return '$' + tooltipItem.raw.toFixed(2);
                  }
                }
              }
            }
          }
        });
      }
  
      // Expenses Line Chart (Monthly Expense Trend)
      const expensesLineChart = document.getElementById("expensesLineChart");
      if (expensesLineChart) {
        new Chart(expensesLineChart, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Monthly Expenses',
              data: [200, 250, 300, 400, 350, 500], // Example data for months
              borderColor: '#FF6384',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
            }]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return '$' + tooltipItem.raw.toFixed(2);
                  }
                }
              }
            }
          }
        });
      }
    }
  
    // Month filter for the line chart
    const monthSelect = document.getElementById("month-select");
    if (monthSelect) {
      monthSelect.addEventListener("change", function () {
        // Implement the logic to filter the data by selected month
        // Here, you would dynamically update the chart based on the selected month
        console.log("Selected month:", monthSelect.value);
        // Placeholder: You would update the chart data here based on the selected month
      });
    }
  
    // Dynamically load recent transactions (for demo purpose)
    const recentTransactions = document.getElementById("recent-transactions");
    if (recentTransactions) {
      const transactionsData = [
        { date: '18/04/2025', description: 'Grocery Shopping', category: 'Food', amount: '$85.40' },
        { date: '17/04/2025', description: 'Netflix Subscription', category: 'Entertainment', amount: '$15.99' },
        { date: '15/04/2025', description: 'Gas Station', category: 'Transportation', amount: '$45.00' },
        { date: '12/04/2025', description: 'Restaurant', category: 'Food', amount: '$63.20' },
        { date: '10/04/2025', description: 'Amazon Purchase', category: 'Shopping', amount: '$127.50' },
      ];
  
      // Render the transactions dynamically
      transactionsData.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${transaction.date}</td>
          <td>${transaction.description}</td>
          <td>${transaction.category}</td>
          <td>${transaction.amount}</td>
        `;
        recentTransactions.appendChild(row);
      });
    }
  });
  