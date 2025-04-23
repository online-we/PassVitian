// Add JavaScript for interactive features (optional)
// Example: Handle button clicks, AJAX requests, etc.

const enrollButtons = document.querySelectorAll('.enroll-btn');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle button click event (e.g., display a modal, redirect to another page)
        alert('Enrolling in course...'); 
    });
});