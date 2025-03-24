// Smooth scrolling function
function scrollToYear(yearId) {
    const section = document.getElementById(yearId);
    if (section) {
        const position = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: position, behavior: 'smooth' });
    }
}
