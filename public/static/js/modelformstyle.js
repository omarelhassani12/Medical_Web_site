/////for the first button on the navbar
// Get the modal
var modal = document.getElementById("signin-modal");

// Get the button that opens the modal
var btn = document.querySelector(".appointment-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function(event) {
    event.preventDefault();
  // Check if the user is signed in
  // Here you can add your own logic to check if the user is signed in or not
  var signedIn = false; // Assume the user is not signed in
  if (signedIn) {
    // Redirect the user to the appointment page
    window.location.href = "#appointment";
} else {
    // Display the modal
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});


/////for the second button on the home
// Get the modal
var modal = document.getElementById("signin-modal");

// Get the appointment button
var appointmentBtn = document.getElementById("appointment-btn");

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the appointment button, open the modal
appointmentBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
