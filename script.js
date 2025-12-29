function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* ================= SCROLL REVEAL LOGIC ================= */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
};
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".achievement-card").forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll reveal animation
const animatedItems = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeUp 0.9s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

animatedItems.forEach(item => observer.observe(item));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".glass").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});


