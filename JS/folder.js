document.getElementById('addFolderBtn').addEventListener('click', function() {
    const foldersContainer = document.getElementById('foldersContainer');
    const folderCount = foldersContainer.childElementCount;

    if (folderCount < 10) {
        const newFolder = document.createElement('div');
        newFolder.className = 'folder';
        newFolder.innerHTML = `<input type="text" placeholder="Folder Name">`;
        foldersContainer.appendChild(newFolder);
    } else {
        alert('Maximum of 10 folders allowed.');
    }
});

// Implement logic for folder renaming and opening
