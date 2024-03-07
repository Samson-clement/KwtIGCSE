function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



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