let x = document.querySelector('.x');
let y = document.querySelector('.y');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;
});
