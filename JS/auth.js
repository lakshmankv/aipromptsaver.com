document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock login (for simplicity, no real authentication here)
    localStorage.setItem('user', JSON.stringify({ username, email }));
    alert('Login successful!');
    window.location.href = 'dashboard.html';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const photo = document.getElementById('photo').files[0];

    if (!validatePassword(password)) {
        alert('Password must contain at least 8 characters, including one uppercase letter, one number, and one special character.');
        return;
    }

    if (photo.size > 5120) {
        alert('Photo must be less than 5KB.');
        return;
    }

    // Mock registration
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
}
