function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Typed.js effect
document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
  script.onload = () => {
    new Typed("#typed", {
      strings: ["Python Developer", "Masters of IT student at UTS", "Web & AI Enthusiast"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  };
  document.body.appendChild(script);
});
