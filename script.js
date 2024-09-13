document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const waitlistPosition = document.getElementById('waitlist-position');
    const positionNumber = document.getElementById('position-number');
    let currentPosition = 1000; // Starting position

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simulate API call
        setTimeout(() => {
            currentPosition++;
            positionNumber.textContent = currentPosition;
            waitlistPosition.classList.remove('hidden');
            waitlistPosition.classList.add('animate-fadeIn');
            
            // Reset form
            signupForm.reset();
        }, 1000);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .step-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
});
