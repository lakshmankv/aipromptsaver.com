document.getElementById('profilePhoto').addEventListener('click', function() {
    const popup = document.getElementById('profilePopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

// Load user's data
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('usernameDisplay').textContent = user.username;
        document.getElementById('emailDisplay').textContent = user.email;

        // Update profile photo if available
        // Example: if a custom profile photo URL is stored
        // document.getElementById('profilePhoto').src = user.profilePhotoUrl || '../assets/images/default-profile.png';
    } else {
        window.location.href = 'login.html';
    }
});
