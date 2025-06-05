const contactLink = document.getElementById("contactLink") as HTMLAnchorElement;
const productsContactLink = document.getElementById(
  "productsContactLink"
) as HTMLButtonElement;
const contactPopup = document.getElementById("contactPopup") as HTMLDivElement;
const closePopup = document.getElementById("closePopup") as HTMLSpanElement;
const contactForm = document.querySelector(".contact-form") as HTMLFormElement;

if (
  !contactLink ||
  !productsContactLink ||
  !contactPopup ||
  !closePopup ||
  !contactForm
) {
  console.error("Required elements not found");
  throw new Error("Required elements not found");
}

const openContactPopup = (e: Event) => {
  e.preventDefault();
  contactPopup.style.display = "flex";
};

contactLink.addEventListener("click", openContactPopup);
productsContactLink.addEventListener("click", openContactPopup);

closePopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});

contactPopup.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const messageInput = document.getElementById(
    "message"
  ) as HTMLTextAreaElement;

  if (!nameInput || !emailInput || !messageInput) {
    console.error("Form inputs not found");
    return;
  }

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  console.log("Form Submitted!", { name, email, message });
  alert(
    `Thank you for your message, ${name}! We will get back to you shortly.`
  );

  contactPopup.style.display = "none";
  contactForm.reset();
});

// Animation on scroll functionality
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document
  .querySelectorAll(
    ".animate-fade-in-up, .animate-fade-in-right, .animate-fade-in-left"
  )
  .forEach((element) => {
    observer.observe(element);
  });
