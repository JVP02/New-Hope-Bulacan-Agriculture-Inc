// Swipable carousel
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".awardcarousel-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let isDragging = false;
    let startX, scrollLeft;

    if (!track) return;

    // Disable default image dragging
    document.querySelectorAll(".awardcarousel-item img").forEach(img => {
        img.setAttribute("draggable", "false");
    });

    // Mouse Drag Functionality
    track.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.cursor = "grabbing";
    });

    track.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener("mouseup", () => {
        isDragging = false;
        track.style.cursor = "grab";
    });

    track.addEventListener("mouseleave", () => {
        isDragging = false;
        track.style.cursor = "grab";
    });

    // Touch Swipe Functionality
    track.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        scrollLeft = track.scrollLeft;
    });

    track.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener("touchend", () => {
        isDragging = false;
    });

    // Button Navigation
    prevBtn.addEventListener("click", () => {
        track.scrollLeft -= track.clientWidth / 2; // Moves half the container width to the left
    });

    nextBtn.addEventListener("click", () => {
        track.scrollLeft += track.clientWidth / 2; // Moves half the container width to the right
    });
});
