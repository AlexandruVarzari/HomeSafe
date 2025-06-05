var contactLink = document.getElementById("contactLink");
var contactPopup = document.getElementById("contactPopup");
var closePopup = document.getElementById("closePopup");
var contactForm = document.querySelector(".contact-form");
if (!contactLink || !contactPopup || !closePopup || !contactForm) {
    console.error("Required elements not found");
    throw new Error("Required elements not found");
}
contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    contactPopup.style.display = "flex";
});
closePopup.addEventListener("click", function () {
    contactPopup.style.display = "none";
});
contactPopup.addEventListener("click", function (e) {
    if (e.target === contactPopup) {
        contactPopup.style.display = "none";
    }
});
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    if (!nameInput || !emailInput || !messageInput) {
        console.error("Form inputs not found");
        return;
    }
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;
    console.log("Form Submitted!", { name: name, email: email, message: message });
    alert("Thank you for your message, ".concat(name, "! We will get back to you shortly."));
    contactPopup.style.display = "none";
    contactForm.reset();
});
