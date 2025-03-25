document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
        product.addEventListener("click", function () {
            // Remove 'active' from all products before activating the clicked one
            products.forEach((item) => {
                if (item !== this) {
                    item.classList.remove("active");
                }
            });

            // Toggle the clicked product
            this.classList.toggle("active");
        });
    });
});
