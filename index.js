const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

mobileNavToggle.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});
