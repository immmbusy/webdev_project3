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

// Initialize Google Maps API
 function initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.0, lng: 119.0 }, // Center point to show all three markers
        zoom: 5,
        mapId: 'f74b50a1c5b48868' // Optional custom map style
      });

      // Marker for the Great Wall of China
      const greatWall = { lat: 40.4319, lng: 116.5704 };
      new google.maps.Marker({
        position: greatWall,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: "Great Wall of China"
      });

      // Marker for Shanghai
      const shanghai = { lat: 31.2304, lng: 121.4737 };
      new google.maps.Marker({
        position: shanghai,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: "Shanghai"
      });

      // Marker for Tangshan
      const tangshan = { lat: 39.6304, lng: 118.1802 };
      new google.maps.Marker({
        position: tangshan,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: "Tangshan"
      });
    }