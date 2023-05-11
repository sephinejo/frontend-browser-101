let x = document.querySelector('.horizontal');
let y = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('mousemove', (event) => {
  console.log(event);
  x = event.clientX;
  y = event.clientY;
  tag.innerHTML = `x: ${x}, y: ${y}`;
});
