const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x}px, ${y}px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
});
