document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginform');
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('pwd');

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get email and password values
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;

        // Simple validation (you can add more complex logic here)
        if (email === 'bhewahaashim@gmail.com' && password === '1234') {
            // Save login status in localStorage
            localStorage.setItem('loggedIn', 'true');

            // Redirect to the homepage
            window.location.href = 'homepage.html';
        } else {
            alert('Invalid email or password');
        }
    });
});