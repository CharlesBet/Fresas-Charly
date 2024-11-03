document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', function() {
        window.location.href = '#acerca';
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});
