document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let subNav = this.nextElementSibling;
            
            // Toggle the clicked sub-menu
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
    });

    // Close sub-menus when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".main-nav ul li")) {
            document.querySelectorAll(".sub-nav").forEach((nav) => {
                nav.classList.remove("active");
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

