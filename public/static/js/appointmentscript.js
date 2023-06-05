flatpickr(".calendar", {
  inline: true,
});


// Use event delegation to handle the click event for the second step button
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('step2-btn')) {
    // If the click target is the second step button, show confirmation modal
    $('#confirmationModal').modal('show');

    // Handle confirm and cancel button clicks
    const confirmBtn = document.querySelector('.modal-confirm-btn');
    const cancelBtn = document.querySelector('.modal-cancel-btn');

    confirmBtn.addEventListener('click', () => {
      // If confirmed, hide step 2 and show success message
      step2.style.display = 'none';
      const successMsg = document.querySelector('.step3 .success-msg');
      successMsg.style.display = 'block';
      $('#confirmationModal').modal('hide');
    });

    cancelBtn.addEventListener('click', () => {
      // If cancelled, hide the modal
      $('#confirmationModal').modal('hide');
    });
  }
});

// Get a reference to the "Confirm" button
const confirmBtn = document.querySelector('.modal-confirm-btn');

// Add an event listener to the button
confirmBtn.addEventListener('click', () => {
  // Redirect the user to step 2
  window.location.href = 'appointmentpage.html';
});
