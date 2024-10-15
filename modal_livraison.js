const openModal = document.getElementById('openModal');
const modal = document.getElementById('imageModal');

openModal.addEventListener('click', () => {
    modal.classList.replace('hidden', 'flex');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.replace('flex', 'hidden');
    }
});