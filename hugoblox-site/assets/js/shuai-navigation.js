// Accessibility and close-on-navigation for the Academic CV mobile menu.
const menuCheckbox = document.getElementById('nav-toggle');
const menuControl = document.querySelector('label[for="nav-toggle"]');
const menu = document.getElementById('nav-menu');
if (menuCheckbox && menuControl && menu) {
  menuControl.setAttribute('role', 'button');
  menuControl.setAttribute('tabindex', '0');
  menuControl.setAttribute('aria-controls', 'nav-menu');
  const syncMenu = () => {
    menuControl.setAttribute('aria-expanded', String(menuCheckbox.checked));
    menuControl.setAttribute('aria-label', menuCheckbox.checked ? 'Close navigation menu' : 'Open navigation menu');
  };
  const closeMenu = () => {
    menuCheckbox.checked = false;
    menuCheckbox.dispatchEvent(new Event('change'));
  };
  menuCheckbox.addEventListener('change', syncMenu);
  menuControl.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      menuCheckbox.checked = !menuCheckbox.checked;
      menuCheckbox.dispatchEvent(new Event('change'));
    }
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuCheckbox.checked) {
      closeMenu();
      menuControl.focus();
    }
  });
  syncMenu();
}
document.querySelectorAll('.theme-toggle').forEach(button => {
  button.setAttribute('aria-label', 'Toggle light or dark appearance');
});
