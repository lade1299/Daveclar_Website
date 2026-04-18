document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const cta = document.querySelector('.nav-cta');

  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      if (cta) cta.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      if (cta) cta.classList.remove('open');
    });
  });
});
