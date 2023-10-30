let nav = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.nav-button-menu');
const closeIcon = document.querySelector('.nav-button-close');

function clickMenu() {
  if (nav.classList.contains('nav-links-open')) {
    nav.classList.remove('nav-links-open');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    nav.classList.add('nav-links-open');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
}