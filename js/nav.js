// Used in navigation in Products page
// Click Tabs to scroll

// Scroll to Section JS ===========================================================================================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = 90; // Adjust this value based on your header height

    if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
}


// Click Cards from profile.html to scroll ===========================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Function to get query parameters from URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Check if a category parameter exists in the URL
    const category = getQueryParam("category");

    if (category) {
        // Find the section with the matching ID
        const section = document.getElementById(category);
        if (section) {
            // Adjust scroll position for header height
            const offset = 90; // Adjust this if needed
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

            // Smooth scroll to the section
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
    }
});
