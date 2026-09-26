const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-12% 0px -60% 0px', threshold: [0, 0.1] });
  sections.forEach((section) => observer.observe(section));
}

document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
const currentYear = document.querySelector('[data-current-year]');
if (currentYear) currentYear.textContent = new Date().getFullYear();
