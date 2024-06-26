
// Add animation class to the login box on page load
window.onload = function() {
const loginBox = document.querySelector('.login-box');
loginBox.classList.add('animated', 'fadeInUp');
};

// Toggle password visibility
function togglePasswordVisibility() {
const passwordInput = document.querySelector('.input-group input[type="password"]');
const toggleIcon = document.querySelector('.password-toggle i');

if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
} else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
    }
}