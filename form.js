document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('form');
    const nextButton = document.querySelector('.nextBtn');

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Disable the "Next" button after registration to prevent multiple submissions
        nextButton.disabled = true;

        // Create a success message element
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Successfully Registered!';

        // Append the success message to the form container
        registrationForm.parentElement.appendChild(successMessage);

        // Apply a green color and fade-in animation to the success message
        successMessage.style.color = 'green';
        successMessage.style.animation = 'fade-in 2s';

        // Hide the registration form
        registrationForm.style.display = 'none';

        // Redirect to the home page (loginpage.html) after a delay
        setTimeout(function() {
            window.location.href = 'loginpage.html';
        }, 3000); // Redirect after 3 seconds
    });
});
