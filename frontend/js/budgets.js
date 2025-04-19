// budgets.js

// Adding event listeners for add, edit, and delete buttons
document.addEventListener("DOMContentLoaded", function () {
    const addBudgetBtn = document.getElementById("add-budget-btn");
    const budgetModal = document.getElementById("budget-modal");
    const modalClose = document.querySelector(".modal-close");
    const cancelBtn = document.getElementById("budget-cancel");
    const saveBtn = document.getElementById("budget-save");
    
    // Budget form elements
    const budgetCategory = document.getElementById("budget-category");
    const budgetAmount = document.getElementById("budget-amount");
    const budgetMonth = document.getElementById("budget-month");
  
    // Open the modal for adding a budget
    addBudgetBtn.addEventListener("click", function () {
      budgetModal.style.display = "block";
    });
  
    // Close the modal
    modalClose.addEventListener("click", function () {
      budgetModal.style.display = "none";
    });
  
    // Close the modal on cancel
    cancelBtn.addEventListener("click", function () {
      budgetModal.style.display = "none";
    });
  
    // Save the budget when the save button is clicked
    saveBtn.addEventListener("click", function () {
      const category = budgetCategory.value;
      const amount = parseFloat(budgetAmount.value);
      const month = budgetMonth.value;
  
      // Validate the form inputs
      if (!category || isNaN(amount) || amount <= 0 || !month) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
      // Add the new budget to the table
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${category}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>$0.00</td>
        <td>$${amount.toFixed(2)}</td>
        <td>0% Used</td>
        <td>
          <button class="btn btn-primary edit-budget" data-id="new"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger delete-budget" data-id="new"><i class="fas fa-trash"></i></button>
        </td>
      `;
      document.getElementById("budget-list").appendChild(newRow);
  
      // Close the modal
      budgetModal.style.display = "none";
      
      // Reset form values
      budgetCategory.value = "";
      budgetAmount.value = "";
      budgetMonth.value = "4-2025";
      
      updateBudgetChart(); // Update chart with new data
    });
  
    // Event delegation for edit and delete actions
    document.getElementById("budget-list").addEventListener("click", function (e) {
      if (e.target.classList.contains("edit-budget")) {
        editBudget(e.target.closest("tr"));
      }
      if (e.target.classList.contains("delete-budget")) {
        deleteBudget(e.target.closest("tr"));
      }
    });
  
    // Edit budget function (stub)
    function editBudget(row) {
      const category = row.children[0].textContent;
      const amount = parseFloat(row.children[1].textContent.replace('$', ''));
      
      // Open the modal with existing values
      budgetCategory.value = category;
      budgetAmount.value = amount;
      budgetModal.style.display = "block";
  
      // Remove the row from the table temporarily
      row.remove();
    }
  
    // Delete budget function
    function deleteBudget(row) {
      if (confirm("Are you sure you want to delete this budget?")) {
        row.remove();
        updateBudgetChart(); // Update chart after deletion
      }
    }
  
    // Chart setup
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Food', 'Transportation', 'Shopping', 'Utilities', 'Entertainment'],
        datasets: [{
          label: 'Budget Distribution',
          data: [700, 300, 500, 400, 300],
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700'],
          borderColor: '#fff',
          borderWidth: 1
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
                return tooltipItem.label + ": $" + tooltipItem.raw.toFixed(2);
              }
            }
          }
        }
      }
    });
  
    // Update chart data (stub)
    function updateBudgetChart() {
      const rows = document.querySelectorAll("#budget-list tr");
      const updatedData = Array.from(rows).map(row => {
        const spent = parseFloat(row.children[2].textContent.replace('$', ''));
        return spent;
      });
  
      budgetChart.data.datasets[0].data = updatedData;
      budgetChart.update();
    }
  });
  