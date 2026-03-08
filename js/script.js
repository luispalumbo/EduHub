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

// --- Calculator Logic ---
function runCalculator() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const display = document.getElementById('calcResult');

    if (isNaN(n1) || isNaN(n2)) {
        display.innerText = "Please enter numbers!";
        return;
    }

    let result;
    switch(op) {
        case 'add': result = n1 + n2; break;
        case 'subtract': result = n1 - n2; break;
        case 'multiply': result = n1 * n2; break;
        case 'divide': result = n1 / n2; break;
    }

    display.innerText = `Result: ${result}`;
}

// --- Quiz Logic ---
function checkAnswer(choice) {
    const feedback = document.getElementById('quizFeedback');
    
    if (choice === 'CSS') {
        feedback.innerText = "Correct! CSS is for styling.";
        feedback.style.color = "#10b981"; // Emerald
    } else {
        feedback.innerText = "Try again! Think about layouts and colors.";
        feedback.style.color = "#f43f5e"; // Rose
    }
}