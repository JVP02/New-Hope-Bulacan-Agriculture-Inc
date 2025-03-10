// Header Js is in the index.html file

// Carousel JS ===========================================================================================================
// =======================================================================================================================
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');

    // Reset index if out of bounds
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Move carousel
    const newTransform = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransform}%)`;

    // Remove animation from all slides first
    slides.forEach(slide => {
        slide.classList.remove('active-slide');
    });

    // Add animation class to the current slide
    slides[currentSlide].classList.add('active-slide');
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize carousel
showSlide(currentSlide);

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

