const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

menuToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});
