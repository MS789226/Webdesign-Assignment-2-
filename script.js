javascript

const usernameInput = document.getElementById;
const saveButton = document.getElementById;
const clearButton = document.getElementById;
const displayName = document.getElementById;

function saveName() {
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem('username', name);
        displayName.textContent = `Hello, ${name}!`;
        usernameInput.value = ''; 
    }
}


function clearName() {
    localStorage.removeItem;
    displayName.textContent = '';
}


function displaySavedName() {
    const savedName = localStorage.getItem;
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`;
    }
}


saveButton.addEventListener('click', saveName);
clearButton.addEventListener('click', clearName);
window.addEventListener('load', displaySavedName);