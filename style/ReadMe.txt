flex ================================================================================================================

flex: 1; /* Allows equal width for both cards */







align ================================================================================================================
align-items: stretch; /* Ensures both cards have equal height */








object-fit: cover; /* Ensures the image stretches fully */








const track = document.querySelector(".awardcarousel-track");
const items = document.querySelectorAll(".awardcarousel-item");
const container = document.querySelector(".awardcarousel-container");

let isDragging = false;
let startX = 0;
let startScroll = 0;
let lastMoveX = 0;
let velocity = 0;
let lastTime = 0;
let currentTranslate = 0;

const containerWidth = container.offsetWidth;
const itemWidth = items[0].offsetWidth + 20; // Including gap

// Handle swipe start
function touchStart(event) {
    isDragging = true;
    startX = event.type.includes("mouse") ? event.clientX : event.touches[0].clientX;
    startScroll = currentTranslate;
    lastMoveX = startX;
    lastTime = Date.now();
    track.style.transition = "none";
}

// Handle swiping movement
function touchMove(event) {
    if (!isDragging) return;
    const currentX = event.type.includes("mouse") ? event.clientX : event.touches[0].clientX;
    let deltaX = currentX - lastMoveX;

    let timeNow = Date.now();
    let timeDiff = timeNow - lastTime;
    velocity = deltaX / timeDiff; // Calculate velocity

    currentTranslate = startScroll + (currentX - startX);
    track.style.transform = `translateX(${currentTranslate}px)`;

    lastMoveX = currentX;
    lastTime = timeNow;
}

// Handle swipe release
function touchEnd() {
    isDragging = false;

    // Inertia effect - move based on swipe speed
    let distance = velocity * 150; // Adjust factor for sensitivity
    currentTranslate += distance;

    // Keep within bounds
    const maxTranslate = 0;
    const minTranslate = -(items.length * itemWidth - containerWidth);
    if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
    if (currentTranslate < minTranslate) currentTranslate = minTranslate;

    // Apply smooth transition
    track.style.transition = "transform 0.4s ease-out";
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// Add event listeners
track.addEventListener("touchstart", touchStart);
track.addEventListener("touchmove", touchMove);
track.addEventListener("touchend", touchEnd);
track.addEventListener("mousedown", touchStart);
track.addEventListener("mousemove", touchMove);
track.addEventListener("mouseup", touchEnd);
track.addEventListener("mouseleave", touchEnd);
