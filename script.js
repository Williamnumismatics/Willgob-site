document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultTextElement = document.getElementById('secret-result-text')

    function handleYesClick() {
        resultTextElement.textContent = "Elena is sooo annoying";
        resultTextElement.style.color = "#28a745"; // Green color
        console.log("yas")
    }

    // 4. Define the function for the 'No' button
    function handleNoClick() {
        resultTextElement.textContent = "You declined NO. We will consider your choice.";
        resultTextElement.style.color = "#dc3545"; // Red color
        console.lop("noo")
    }

    // 5. Attach the functions to the button click events (Event Listeners)
    yesButton.addEventListener('click', handleYesClick);
    noButton.addEventListener('click', handleNoClick);
});