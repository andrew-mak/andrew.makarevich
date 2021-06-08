import Typewriter from 'typewriter-effect/dist/core';

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

const navBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('toggleNav');
});

const typewriter = new Typewriter('#typeEffect', {
  loop: true
});

typewriter
  .pauseFor(2300)
  .typeString('I\'m Andrew Makarevich')
  .pauseFor(2500)
  .deleteAll()
  .typeString('I\'m Frontend Developer')
  .pauseFor(2500)
  .start();


let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-transition-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-transition-stopper');
  }, 1000);
});

window.addEventListener('scroll', () => {
  let position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const navbar = document.querySelector('.navbar');
  if (position >= 800) {
    navbar.style.display = 'block';
  }
  else {
    navbar.style.display = 'none';
  }
});