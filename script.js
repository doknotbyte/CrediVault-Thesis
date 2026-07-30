document.addEventListener('DOMContentLoaded', () => {
    // MODAL CONTROL FOR EXTERNAL SOURCES / FACT-CHECKING LINKS
    const modal = document.getElementById('externalModal');
    const modalTargetUrl = document.getElementById('modalTargetUrl');
    const proceedBtn = document.getElementById('proceedBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const externalButtons = document.querySelectorAll('.btn-external');

    // Open Modal function
    externalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = button.getAttribute('data-url');
            
            modalTargetUrl.textContent = targetUrl;
            proceedBtn.setAttribute('href', targetUrl);
            
            modal.classList.add('active');
        });
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close when clicking outside box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});