document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultTextElement = document.getElementById('secret-result-text')

    function handleYesClick() {
        resultTextElement.textContent = "WHYYYYY U SNOOP";
        resultTextElement.style.color = "#28a745"; // Green color
        console.log("yas")
    }

    // 4. Define the function for the 'No' button
    function handleNoClick() {
        resultTextElement.textContent = "You declined NO. We will consider your choice.";
        resultTextElement.style.color = "#dc3545"; // Red color
        console.log("noo")
    }

    // 5. Attach the functions to the button click events (Event Listeners)
    yesButton.addEventListener('click', handleYesClick);
    noButton.addEventListener('click', handleNoClick);

    async function loadJournal() {
    const url = "hhttps://raw.githubusercontent.com/Williamnumismatics/MagStrike/refs/heads/main/JOURNAL.md";

    try {
        const res = await fetch(url);
        const md = await res.text();

        // Convert markdown → HTML
        document.getElementById("journal").innerHTML = marked.parse(md);

    } catch (err) {
        console.error("Error loading journal:", err);
        document.getElementById("journal").innerHTML = "<p>Failed to load journal.</p>";
    }
    }

    loadJournal();
});