document.getElementById('saveBtn').addEventListener('click', function() {
    const content = document.getElementById('notepadContent').value;
    localStorage.setItem('notepadContent', content);
    alert('Content saved successfully!');
});

document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('notepadContent').removeAttribute('disabled');
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const content = document.getElementById('notepadContent');
    content.select();
    document.execCommand('copy');
    alert('Content copied to clipboard!');
});

document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'dashboard.html';
});

// Load saved content
document.addEventListener('DOMContentLoaded', function() {
    const savedContent = localStorage.getItem('notepadContent');
    if (savedContent) {
        document.getElementById('notepadContent').value = savedContent;
    }
});
