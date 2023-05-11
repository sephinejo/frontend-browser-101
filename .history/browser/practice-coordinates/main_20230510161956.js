const x = document.querySelector('.x');
const y = document.querySelector('.y');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;
});
