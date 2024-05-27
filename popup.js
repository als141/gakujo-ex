document.addEventListener('DOMContentLoaded', () => {
    const inputSection = document.getElementById('input-section');
    const resetSection = document.getElementById('reset-section');
    const secretInput = document.getElementById('secret');
    const saveButton = document.getElementById('save');
    const resetButton = document.getElementById('reset');
  
    chrome.storage.sync.get('secret', ({ secret }) => {
      if (secret) {
        inputSection.classList.add('hidden');
        resetSection.classList.remove('hidden');
      } else {
        inputSection.classList.remove('hidden');
        resetSection.classList.add('hidden');
      }
    });
  
    saveButton.addEventListener('click', () => {
      const secret = secretInput.value;
      chrome.storage.sync.set({ secret }, () => {
        alert('Secret key saved!');
        inputSection.classList.add('hidden');
        resetSection.classList.remove('hidden');
      });
    });
  
    resetButton.addEventListener('click', () => {
      chrome.storage.sync.remove('secret', () => {
        alert('Secret key reset!');
        inputSection.classList.remove('hidden');
        resetSection.classList.add('hidden');
        secretInput.value = '';
      });
    });
  });
  