// Add event listener to the buttons with the "button" class
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetModalId = button.getAttribute('data-bs-target');
        const targetModal = new bootstrap.Modal(document.querySelector(targetModalId));
        targetModal.show();
    });
});

// Add event listener to each modal to remove the backdrop when the modal is closed
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.classList.remove('modal-open');
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        for (const backdrop of modalBackdrops) {
            backdrop.remove();
        }
    });
});