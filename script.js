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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
