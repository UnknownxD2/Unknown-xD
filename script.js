// Wait for the page to load
window.addEventListener('load', function () {
  // Add a delay to simulate loading
  setTimeout(function () {
    document.body.classList.add('loaded'); // Hide the loader
  }, 2000); // Adjust the delay time (in milliseconds) as needed

  // Text input functionality
  const noteText = document.getElementById('note');
  const editTextarea = document.getElementById('edit-note');
  const saveBtn = document.getElementById('save-btn');

  // Show textarea and hide note text when Save button is clicked
  saveBtn.addEventListener('click', function () {
    noteText.textContent = editTextarea.value; // Update the note text
    editTextarea.value = ''; // Clear the textarea
    alert('Note saved!');
  });
});
