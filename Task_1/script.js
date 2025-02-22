function checkSlide() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
        const elementBottom = window.scrollY + element.offsetHeight;
        const isHalfShown = slideInAt > element.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);
checkSlide();


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';

    form.parentNode.insertBefore(successMessage, form);
    form.parentNode.insertBefore(errorMessage, form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!nameInput.value.trim()) {
            errorMessage.textContent = 'Please enter your name.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim()) {
            errorMessage.textContent = 'Please enter your email.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            errorMessage.textContent = 'Please enter your message.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            messageInput.focus();
            return;
        }

        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset();
    });
});
