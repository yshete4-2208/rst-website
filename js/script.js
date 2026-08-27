// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const subject = event.target.elements[2].value;
    const message = event.target.elements[3].value;

    // Create mailto link
    const mailtoLink = `mailto:info@rst1718.in?subject=${encodeURIComponent(subject)}&body=From: ${name} (${email})%0A%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    // Reset form
    event.target.reset();
}

// Smooth scroll for navigation links
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

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.about-card, .service-card, .feature, .info-card').forEach(card => {
    observer.observe(card);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Analytics tracking (optional - for future use)
console.log('RST Website loaded successfully');
