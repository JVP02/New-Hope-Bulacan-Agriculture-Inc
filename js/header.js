// reusabble header
// Load header.html into the #header-placeholder div
document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data)
        .catch(error => console.error("Error loading header:", error));
});

// header sub-nav js =====================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Get all menu items that have a sub-nav
    const subNavMenus = document.querySelectorAll(".menu-item.has-subnav");

    subNavMenus.forEach((menu) => {
        menu.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let subNav = this.nextElementSibling;

            // Toggle the clicked sub-menu
            if (subNav.classList.contains("active")) {
                subNav.classList.remove("active");
            } else {
                // Close all other sub-menus before opening the clicked one
                document.querySelectorAll(".sub-nav").forEach((nav) => {
                    nav.classList.remove("active");
                });
                subNav.classList.add("active");
            }
        });
    });

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
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".mobile-nav") && !event.target.closest(".menu-toggle")) {
            mobileNav.classList.remove("active");
        }
    });
});