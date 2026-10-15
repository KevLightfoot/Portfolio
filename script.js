
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navigation.classList.remove("open"));
  });
}

// Reveal sections as they enter the viewport.
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .focus-strip, .section-heading, .project, .about-mark, .about-copy, .skill-card, .contact-panel"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
