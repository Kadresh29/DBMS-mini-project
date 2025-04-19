document.addEventListener('DOMContentLoaded', function () {
    // Variables for interacting with HTML elements
    const addTransactionBtn = document.getElementById('add-transaction-btn');
    const transactionModal = document.getElementById('transaction-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const transactionForm = document.getElementById('transaction-form');
    const transactionSaveBtn = document.getElementById('transaction-save');
    const transactionCancelBtn = document.getElementById('transaction-cancel');
    const transactionsList = document.getElementById('transactions-list');
    const dateFilter = document.getElementById('date-filter');
    const categoryFilter = document.getElementById('category-filter');
    const paymentFilter = document.getElementById('payment-filter');
    
    // Event listener to open the Add Transaction modal
    addTransactionBtn.addEventListener('click', function () {
        transactionModal.style.display = 'block';
    });

    // Close the modal
    modalCloseBtn.addEventListener('click', function () {
        transactionModal.style.display = 'none';
    });

    // Cancel button in the modal
    transactionCancelBtn.addEventListener('click', function () {
        transactionModal.style.display = 'none';
    });

    // Handle save button in modal (add new transaction)
    transactionSaveBtn.addEventListener('click', function () {
        const amount = document.getElementById('transaction-amount').value;
        const date = document.getElementById('transaction-date').value;
        const description = document.getElementById('transaction-description').value;
        const category = document.getElementById('transaction-category').value;
        const paymentMethod = document.getElementById('transaction-payment').value;

        if (amount && date && description && category && paymentMethod) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${description}</td>
                <td>${category}</td>
                <td>${paymentMethod}</td>
                <td>$${amount}</td>
                <td>
                    <button class="btn btn-primary edit-transaction"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger delete-transaction"><i class="fas fa-trash"></i></button>
                </td>
            `;
            transactionsList.appendChild(newRow);
            transactionModal.style.display = 'none'; // Close modal after saving
            clearForm(); // Clear form fields
        }
    });

    // Event delegation for handling edit and delete actions
    transactionsList.addEventListener('click', function (e) {
        if (e.target.closest('.edit-transaction')) {
            // Handle editing a transaction
            const row = e.target.closest('tr');
            const date = row.cells[0].innerText;
            const description = row.cells[1].innerText;
            const category = row.cells[2].innerText;
            const paymentMethod = row.cells[3].innerText;
            const amount = row.cells[4].innerText.slice(1);

            document.getElementById('transaction-amount').value = amount;
            document.getElementById('transaction-date').value = date;
            document.getElementById('transaction-description').value = description;
            document.getElementById('transaction-category').value = category;
            document.getElementById('transaction-payment').value = paymentMethod;

            transactionModal.style.display = 'block'; // Open modal for editing

            // Delete the transaction after editing
            row.remove();
        } else if (e.target.closest('.delete-transaction')) {
            // Handle deleting a transaction
            const row = e.target.closest('tr');
            row.remove();
        }
    });

    // Filtering transactions
    dateFilter.addEventListener('change', function () {
        filterTransactions();
    });

    categoryFilter.addEventListener('change', function () {
        filterTransactions();
    });

    paymentFilter.addEventListener('change', function () {
        filterTransactions();
    });

    // Function to filter transactions based on the selected filters
    function filterTransactions() {
        const dateValue = dateFilter.value;
        const categoryValue = categoryFilter.value;
        const paymentValue = paymentFilter.value;

        const rows = transactionsList.getElementsByTagName('tr');
        Array.from(rows).forEach(row => {
            const date = row.cells[0].innerText;
            const category = row.cells[2].innerText;
            const paymentMethod = row.cells[3].innerText;

            let match = true;

            if (dateValue !== 'all' && !date.includes(dateValue)) {
                match = false;
            }
            if (categoryValue !== 'all' && category !== categoryValue) {
                match = false;
            }
            if (paymentValue !== 'all' && paymentMethod !== paymentValue) {
                match = false;
            }

            if (match) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Function to clear the transaction form
    function clearForm() {
        transactionForm.reset();
    }
});
