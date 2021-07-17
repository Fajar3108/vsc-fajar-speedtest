const card = document.querySelector('.card');

document.addEventListener('mousemove', function(e) {
  const x = (window.innerWidth / 2 - e.pageX) / 10;
  const y = (window.innerHeight / 2 - e.pageY) / 5;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});