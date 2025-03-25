document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".history-navigation button");
    const historyItems = document.querySelectorAll(".history-item");

    function showHistory(year) {
        historyItems.forEach(item => {
            item.classList.remove("active");
        });

        document.getElementById(`year-${year}`).classList.add("active");

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        document.querySelector(`[data-year="${year}"]`).classList.add("active");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const year = this.getAttribute("data-year");
            showHistory(year);
        });
    });

    // Show the first tab by default
    showHistory("1982");
});
