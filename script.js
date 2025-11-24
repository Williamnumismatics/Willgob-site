document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultTextElement = document.getElementById('secret-result-text')

    function handleYesClick() {
        resultTextElement.textContent = "You confirmed YES! Thank you for your input.";
        resultTextElement.style.color = "#28a745"; // Green color
    }

    // 4. Define the function for the 'No' button
    function handleNoClick() {
        resultTextElement.textContent = "You declined NO. We will consider your choice.";
        resultTextElement.style.color = "#dc3545"; // Red color
    }

    // 5. Attach the functions to the button click events (Event Listeners)
    yesButton.addEventListener('click', handleYesClick);
    noButton.addEventListener('click', handleNoClick);
});