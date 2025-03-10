// header sub-nav js =====================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    const animalsMenu = document.querySelector(".menu-item[href='#']");
    
    if (animalsMenu) {
        animalsMenu.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior only for "Animals"

            let subNav = this.nextElementSibling;
            
            // Toggle the Animals sub-menu
            if (subNav.classList.contains("active")) {
                subNav.classList.remove("active");
            } else {
                // Close all other sub-menus before opening the new one
                document.querySelectorAll(".sub-nav").forEach((nav) => {
                    nav.classList.remove("active");
                });
                subNav.classList.add("active");
            }
        });
    }

    // Close sub-menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".main-nav ul li")) {
            document.querySelectorAll(".sub-nav").forEach((nav) => {
                nav.classList.remove("active");
            });
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
