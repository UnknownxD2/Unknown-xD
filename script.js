// Get elements
const noteText = document.getElementById('note');
const editTextarea = document.getElementById('edit-note');
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');

// Edit button click
editBtn.addEventListener('click', () => {
  noteText.classList.add('hidden');
  editTextarea.classList.remove('hidden');
  saveBtn.classList.remove('hidden');
  editBtn.classList.add('hidden');
  editTextarea.value = noteText.innerText;
});

// Save button click
saveBtn.addEventListener('click', () => {
  noteText.innerText = editTextarea.value;
  noteText.classList.remove('hidden');
  editTextarea.classList.add('hidden');
  saveBtn.classList.add('hidden');
  editBtn.classList.remove('hidden');
});
