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
    event.preventDefault(); // Prevent the default form submission
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
        // Create and show the confirmation overlay
        const overlay = document.createElement('div');
        overlay.className = 'submission-overlay';
        
        const confirmation = document.createElement('div');
        confirmation.className = 'submission-confirmation';
        
        const checkmark = document.createElement('div');
        checkmark.className = 'checkmark';
        checkmark.textContent = '✓';
        
        const message = document.createElement('p');
        message.textContent = 'Booking request submitted successfully!';
        
        const redirectMessage = document.createElement('p');
        redirectMessage.className = 'redirect-message';
        redirectMessage.textContent = 'We will contact you via WhatsApp shortly to confirm your session and arrange payment.';
        
        // Add a close button
        const closeButton = document.createElement('button');
        closeButton.className = 'btn';
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '20px';
        closeButton.onclick = () => {
            overlay.remove();
            form.reset();
        };
        
        confirmation.appendChild(checkmark);
        confirmation.appendChild(message);
        confirmation.appendChild(redirectMessage);
        confirmation.appendChild(closeButton);
        overlay.appendChild(confirmation);
        document.body.appendChild(overlay);

        // Submit the form data
        const formData = new FormData(form);
        await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        // Reset the form after successful submission
        form.reset();

    } catch (error) {
        console.error('Form submission error:', error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Package Request';
    }
});

// Collapsible sections for Terms & Conditions and FAQ
document.addEventListener('DOMContentLoaded', function() {
    // Collapsible functionality
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
}); 