document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function () {
        setTimeout(() => {
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("city").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        }, 2000); // Delay to ensure email is sent before clearing
    });
});
