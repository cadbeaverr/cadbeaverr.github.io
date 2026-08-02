emailjs.init("Ryrh3axjsdWN0LUzi");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_iqm7ycj",
        "template_hrzs5ur",
        this
    ).then(function () {
        alert("Enquiry sent successfully!");
    }, function (error) {
        alert("Failed to send enquiry.");
        console.log(error);
    });
});