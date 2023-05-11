let x = document.querySelector('.horizontal');
let y = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (event) => {
  console.log(event);
  x = event.clientX;
  y = event.clientY;
  coordinates.innerHTML = `x: ${x}, y: ${y}`;
});
