
// Show the login form and hide the registration form by default
document.getElementById("login-form").style.display = "block";
document.getElementById("registerForm").style.display = "none";

// Add click event listeners to the login and register buttons
document.getElementById("login-btn").addEventListener("click", function() {
	document.getElementById("login-form").style.display = "block";
	document.getElementById("registerForm").style.display = "none";
});

document.getElementById("register-btn").addEventListener("click", function() {
	document.getElementById("registerForm").style.display = "block";
	document.getElementById("login-form").style.display = "none";
});
 
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

registerBtn.addEventListener("click", () => {
    loginBtn.classList.remove("active");
    registerBtn.classList.add("active");
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});
// <!-- Add this script to toggle password visibility on clicking the toggle icon -->

const passwordInput = document.querySelector('#password');
const passwordToggleIcon = document.querySelector('.password-toggle-icon');

passwordToggleIcon.addEventListener('click', function() {
const passwordFieldType = passwordInput.getAttribute('type');
if (passwordFieldType === 'password') {
    passwordInput.setAttribute('type', 'text');
    passwordToggleIcon.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
} else {
    passwordInput.setAttribute('type', 'password');
    passwordToggleIcon.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
}
});
// Get the form and input elements
const form = document.querySelector('#register-form');
const confirmPasswordInput = document.querySelector('#confirm-password');


