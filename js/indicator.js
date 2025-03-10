class PageIndicator {
    constructor(containerSelector, indicatorSelector) {
        this.container = document.querySelector(containerSelector);
        this.indicator = document.querySelector(indicatorSelector);
        this.items = this.container ? this.container.children : [];
        this.currentIndex = 0;

        if (this.container && this.indicator && this.items.length > 0) {
            this.init();
        }
    }

    init() {
        this.createIndicators();
        this.updateIndicator();
    }

    createIndicators() {
        this.indicator.innerHTML = ""; // Clear previous indicators

        for (let i = 0; i < this.items.length; i++) {
            const dot = document.createElement("span");
            dot.addEventListener("click", () => this.scrollToItem(i));
            this.indicator.appendChild(dot);
        }

        this.dots = this.indicator.querySelectorAll("span");
    }

    updateIndicator() {
        this.dots.forEach(dot => dot.classList.remove("active"));
        this.dots[this.currentIndex].classList.add("active");
    }

    scrollToItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].scrollIntoView({ behavior: "smooth" });
            this.currentIndex = index;
            this.updateIndicator();
        }
    }
}

// Initialize the page indicator for the landing page
document.addEventListener("DOMContentLoaded", function () {
    new PageIndicator(".landing-images", "#landingIndicator");
    new PageIndicator(".carousel", "#carousel");
});
