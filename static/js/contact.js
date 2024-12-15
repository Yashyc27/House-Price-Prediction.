document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We’ll get back to you soon.');
        form.reset();
    });
});
