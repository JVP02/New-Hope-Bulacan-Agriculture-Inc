// Used in navigation in Products page
// Click Tabs to scroll

// Scroll to Section JS ===========================================================================================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = 125; // Adjust this value based on your header height

    if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
}
