const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'm') {
    menu.classList.toggle('active');
  }
});
