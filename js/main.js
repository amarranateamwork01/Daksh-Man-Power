// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 10px 25px -8px rgba(0,20,40,0.3)';
    }
});

// Initialize any interactive elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('Daksh Man Power Agency website loaded');
    
    // Add click tracking for contact buttons (optional)
    const contactButtons = document.querySelectorAll('.contact-top a, .apply-btn, .whatsapp-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Contact button clicked:', button.href);
        });
    });
});