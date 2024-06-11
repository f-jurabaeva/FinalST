document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission for pre-order
    const preOrderForm = document.getElementById('pre-order-form');

    preOrderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Basic form validation
        if (name && email && phone && address) {
            alert('Thank you for pre-ordering Innovatech VR Pro!');
            preOrderForm.reset();
        } else {
            alert('Please fill in all the required fields.');
        }
    });

    // Handle form submission for newsletter
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('newsletter-email').value;

        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Handle form submission for contact us
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        if (name && email && message) {
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all the required fields.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question h3');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});