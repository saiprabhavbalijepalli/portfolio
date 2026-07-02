// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Dark mode
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form message
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Message sent successfully!";
  form.reset();
});