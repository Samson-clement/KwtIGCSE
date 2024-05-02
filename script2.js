function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = `© ${currentYear} Kuwait IGCSE Hub`;
});





document.addEventListener("DOMContentLoaded", function() {
    var graphicsImg = document.querySelector('.graphics img'); // Select the image in the graphics class
    var images = ['./images/1.svg', './images/2.svg', './images/3.svg', './images/4.svg']; // Array of image paths
    var currentIndex = 0; // Start with the first image

    setInterval(function() {
        currentIndex++; // Move to the next image
        if (currentIndex >= images.length) {
            currentIndex = 0; // Go back to the first image if we've shown all
        }
        graphicsImg.src = images[currentIndex]; // Update the image source
    }, 12000); // Change image every 3000 milliseconds (3 seconds)
});

const messages = [
    "Get Enough Sleep: Ensure you're well-rested, especially before exam days, to optimize performance.",
    "Stay Hydrated: Drinking water helps maintain the balance of body fluids.",
    "Keep a Balanced Diet: Proper nutrition is critical for your body and mind.",
    "Regular Exercise: Keeping your body active can also keep your mind sharp.",
    "Time Management: Make sure to plan your study time effectively."
    // Add more messages as needed
  ];

  window.onload = function() {
    // Get a random index based on the number of messages
    const randomIndex = Math.floor(Math.random() * messages.length);
    // Get the heading element
    const headingElement = document.getElementById('changing');
    // Change the text of the heading
    headingElement.innerHTML = "<b>" + messages[randomIndex] + "</b>";
  };