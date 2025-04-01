// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carouselsec-track');
    const slides = document.querySelectorAll('.carouselsec-slide');
    const dots = document.querySelectorAll('.carouselsec-dot');
    const prevButton = document.querySelector('.carouselsec-button.prev');
    const nextButton = document.querySelector('.carouselsec-button.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let isTransitioning = false;

    // Set initial width of track
    track.style.width = `${slideCount * 100}%`;
    slides.forEach(slide => {
        slide.style.width = `${100 / slideCount}%`;
    });

    // Initialize
    updateCarousel();

    // Next button
    nextButton.addEventListener('click', () => {
        if (!isTransitioning) {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }
    });

    // Previous button
    prevButton.addEventListener('click', () => {
        if (!isTransitioning) {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (!isTransitioning) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });

    // Auto advance
    let autoAdvance = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    function nextSlide() {
        if (!isTransitioning) {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }
    }

    // Reset interval on user interaction
    [prevButton, nextButton, ...dots].forEach(control => {
        control.addEventListener('click', () => {
            clearInterval(autoAdvance);
            autoAdvance = setInterval(nextSlide, 5000);
        });
    });

    function updateCarousel() {
        isTransitioning = true;
        
        // Update slide position
        track.style.transform = `translateX(-${(currentIndex * 100) / slideCount}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 500); // Match this with your CSS transition duration
    }

    // Add transition end listener
    track.addEventListener('transitionend', () => {
        isTransitioning = false;
    });
});
