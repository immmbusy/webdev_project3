// Get references to the toggle button, sidenav, and overlay
const toggleButton = document.getElementById('toggle-button');
const sidenav = document.getElementById('mySidenav');
const overlay = document.getElementById('overlay');

// Function to toggle the sidenav
function toggleSidenav() {
    sidenav.classList.toggle('open'); // Toggle the 'open' class
    overlay.classList.toggle('active'); // Toggle the overlay visibility
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleSidenav);

// Optional: Close the sidenav when clicking on the overlay
overlay.addEventListener('click', function() {
    sidenav.classList.remove('open'); // Remove the 'open' class
    overlay.classList.remove('active'); // Hide the overlay
});

// Select all slider containers
const sliders = document.querySelectorAll('.slider');

// Function to initialize each slider
function initializeSlider(slider) {
    const images = slider.querySelectorAll('.slider-image'); // Get all images in this slider
    let currentIndex = 0;

    // Initialize the slider by displaying only the first image
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Function to change slides
    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    // Initial display setup
    showImage(currentIndex);

    // Event listeners for navigation buttons (prev and next buttons inside this slider)
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
}

// Initialize each slider on the page
sliders.forEach(initializeSlider);
