const cards = document.querySelectorAll(".reveal");
const langToggle = document.querySelector("#langToggle");
let currentLang = "ko";

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => io.observe(card));

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-ko][data-en]").forEach((node) => {
    const value = node.getAttribute(`data-${lang}`);
    if (value) {
      node.innerHTML = value;
    }
  });

  langToggle.textContent = lang === "ko" ? "EN" : "KO";
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ko" ? "en" : "ko";
  applyLanguage(currentLang);
});
