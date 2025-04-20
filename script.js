// Handle form submission
const form = document.getElementById('booking-form');

// Add a hidden input for the email destination
const hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.name = '_next';
hiddenInput.value = window.location.href; // Redirect back to the same page after submission

// Add form action
form.action = 'https://formsubmit.co/charlespamofficial@gmail.com';
form.method = 'POST';

// Add the hidden input to the form
form.appendChild(hiddenInput);

// Handle form submission
form.addEventListener('submit', async (event) => {
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
        // The form will be submitted automatically to FormSubmit
        // We just need to show a success message after redirect
        if (window.location.search.includes('thanks')) {
            alert('Booking request submitted! We will contact you via WhatsApp shortly to confirm your session and arrange payment.');
        }
    } catch (error) {
        alert('There was an error submitting your booking. Please try again or contact us directly via WhatsApp.');
        event.preventDefault();
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Package Request';
    }
}); 