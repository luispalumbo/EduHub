// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById('actionButton');
    const messageDisplay = document.getElementById('message');

    // Add a click event to the button
    button.addEventListener('click', () => {
        messageDisplay.innerText = "Hello! The JavaScript is working perfectly on GitHub Pages.";
        messageDisplay.style.color = "#27ae60";
        messageDisplay.style.fontWeight = "bold";
        
        console.log("Button was clicked!");
    });

});