import Typewriter from 'typewriter-effect/dist/core';
const progressValues = [80, 60, 80, 70, 50, 40];
const progressColor = '#00eaff';

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add("hidePreloader");
  document.body.style.overflow = "visible";
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = "visisble";
});

const navBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('toggleNav');
});

const typewriter = new Typewriter('#typeEffect', {
  loop: true
});

typewriter
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

const progressBars = document.querySelectorAll('.progress-bar');
setInterval(() => {
  setProgressWdth(progressBars, progressValues, progressColor);
}, 400);

const setProgressWdth = (progressItems, values, BGColor) => {
  progressItems.forEach((item, i) => {
    item.firstElementChild.style.width = values[i] + '%';
    item.firstElementChild.style.transition = 'width 3s linear';
    item.firstElementChild.style.background = BGColor;

    item.lastElementChild.textContent = values[i] + '%';
    item.lastElementChild.style.paddingLeft = `calc(${values[i]})% - 10px`;
    item.lastElementChild.style.transition = 'padding-left 3s linear';
  }
  );
}

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