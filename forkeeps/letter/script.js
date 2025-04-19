function nextPage() {
    // Logic for what happens when 'Yes' is clicked (e.g., navigate to another page).
    window.location.href = "yes.html"; // Example: navigating to "yes.html"
}

function moveButton() {
    // Get the 'No' button element
    const noButton = document.getElementById("noButton");

    // Get the screen width and height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get button dimensions
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate the maximum X and Y position for the button
    const maxX = screenWidth - buttonWidth;
    const maxY = screenHeight - buttonHeight;

    // Randomly position the button within the screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Add wiggle animation for fun
    noButton.classList.add("wiggle");

    // Remove the wiggle class after animation
    setTimeout(() => noButton.classList.remove("wiggle"), 500);
}
