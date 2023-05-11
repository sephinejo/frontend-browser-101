let x = document.querySelector('.x');
let y = document.querySelector('.y');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (event) => {
  console.log(event);
  x = event.clientX;
  y = event.clientY;
  coordinates.innerHTML = `x: ${x}, y: ${y}`;
});
