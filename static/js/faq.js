// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question button
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Find the associated answer div
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.fas');

        // Toggle the 'open' class on the answer
        answer.classList.toggle('open');

        // Rotate the icon
        icon.classList.toggle('rotate');

        // Close other open answers
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('.fas');

                otherAnswer.classList.remove('open');
                otherIcon.classList.remove('rotate');
            }
        });
    });
});
