let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const newTransform = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransform}%)`;
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
