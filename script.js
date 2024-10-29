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
