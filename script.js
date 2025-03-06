// Wait for the page to load
window.addEventListener('load', function () {
  // Add a delay to simulate loading
  setTimeout(function () {
    document.body.classList.add('loaded'); // Hide the loader
  }, 2000); // Adjust the delay time (in milliseconds) as needed
});
