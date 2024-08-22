document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const registrationForm = document.getElementById('registrationform');

    // Toggle password visibility
    togglePassword.addEventListener('click', function (e) {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Toggle the eye icon
        this.classList.toggle('fa-eye-slash');
    });

    // Form validation on submit
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (username === '' || email === '' || address === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Perform further actions, e.g., send data to server
        alert('Registration successful!');
    });
});