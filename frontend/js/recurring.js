document.addEventListener("DOMContentLoaded", function () {
    const recurringForm = document.getElementById("recurring-form");
    const recurringList = document.getElementById("recurring-list");
    const saveButton = recurringForm.querySelector("button[type='submit']");
    
    // Function to add a new recurring payment to the table
    function addRecurringPayment(payment) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${payment.name}</td>
        <td>${payment.amount}</td>
        <td>${payment.category}</td>
        <td>${payment.frequency}</td>
        <td>${payment.nextDueDate}</td>
        <td>${payment.method}</td>
        <td>
          <button class="btn btn-primary edit-recurring" data-id="${payment.id}"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger delete-recurring" data-id="${payment.id}"><i class="fas fa-trash"></i></button>
        </td>
      `;
      recurringList.appendChild(row);
    }
  
    // Handle form submission
    recurringForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Collect data from the form
      const payment = {
        id: Date.now(),  // Unique ID based on timestamp
        name: document.getElementById("payment-name").value,
        amount: document.getElementById("payment-amount").value,
        category: document.getElementById("payment-category").value,
        frequency: document.getElementById("payment-frequency").value,
        nextDueDate: document.getElementById("payment-date").value,
        method: document.getElementById("payment-method").value,
      };
  
      // Add new payment to the table
      addRecurringPayment(payment);
  
      // Reset the form
      recurringForm.reset();
    });
  
    // Handle edit button click
    recurringList.addEventListener("click", function (event) {
      if (event.target.closest(".edit-recurring")) {
        const button = event.target.closest(".edit-recurring");
        const paymentId = button.getAttribute("data-id");
  
        const row = button.closest("tr");
        const cells = row.querySelectorAll("td");
  
        // Pre-fill form with data from the row
        document.getElementById("payment-name").value = cells[0].textContent;
        document.getElementById("payment-amount").value = cells[1].textContent;
        document.getElementById("payment-category").value = cells[2].textContent;
        document.getElementById("payment-frequency").value = cells[3].textContent;
        document.getElementById("payment-date").value = cells[4].textContent;
        document.getElementById("payment-method").value = cells[5].textContent;
  
        // Change save button to update button
        saveButton.textContent = "Update Payment";
  
        // Handle form update (implement update logic here)
        recurringForm.addEventListener("submit", function (updateEvent) {
          updateEvent.preventDefault();
          // Update payment data based on form input
          cells[0].textContent = document.getElementById("payment-name").value;
          cells[1].textContent = document.getElementById("payment-amount").value;
          cells[2].textContent = document.getElementById("payment-category").value;
          cells[3].textContent = document.getElementById("payment-frequency").value;
          cells[4].textContent = document.getElementById("payment-date").value;
          cells[5].textContent = document.getElementById("payment-method").value;
  
          // Reset button to "Save" after update
          saveButton.textContent = "Save";
  
          // Reset form
          recurringForm.reset();
        });
      }
    });
  
    // Handle delete button click
    recurringList.addEventListener("click", function (event) {
      if (event.target.closest(".delete-recurring")) {
        const button = event.target.closest(".delete-recurring");
        const row = button.closest("tr");
        row.remove();
      }
    });
  });
  