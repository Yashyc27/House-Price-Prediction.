// GSAP Animations
window.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    gsap.from('.hero-title', {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        delay: 1,
        ease: 'power3.out'
    });

    // Infographics Animation
    gsap.from('.infographic-item', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power3.out'
    });
});

// Typewriter Effect
const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75
});

typewriter
    .typeString('House Price Prediction')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Advanced ML Tools')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Your Trusted Real Estate Advisor')
    .pauseFor(2000)
    .start();

// Responsive Navbar Toggle (optional)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
