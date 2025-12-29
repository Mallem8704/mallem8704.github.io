/* ===== PROJECT FILTER ===== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      project.style.display =
        filter === 'all' || project.dataset.category === filter
          ? 'block'
          : 'none';
    });
  });
});

/* ===== SCROLL ANIMATION ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
