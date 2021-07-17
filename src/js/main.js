import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#typeEffect', {
  loop: true
});

typewriter
  .pauseFor(2300)
  .typeString('I\'m Andrew Makarevich')
  .pauseFor(2500)
  .deleteAll()
  .typeString('I\'m Frontend Developer')
  .pauseFor(2000)
  .start();

const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.submit();
      contactForm.reset();
    }
    else alert('unfortunately failed to send the message :(');
  });
}

const navBtn = document.querySelector('.navbar-toggler');
const navbarItems = document.querySelector('.navbar-items');
const navUl = document.querySelector('.navbar-ul');

navUl.addEventListener('click', () => {
  if (navbarItems && navbarItems.classList.contains('toggleNav')) {
    navbarItems.classList.toggle('toggleNav');
  }
})

navBtn.addEventListener('click', () => {
  navbarItems.classList.toggle('toggleNav');
});

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

window.addEventListener('load', async () => {
  const d = new Date().toJSON();
  await fetch(`https://hireme-26b78-default-rtdb.firebaseio.com/${d.slice(0, 10)}/${d.slice(11, 19)}.json`, {
    method: 'POST',
    body: JSON.stringify({
      date: new Date().toUTCString(),
      userAgent: window.navigator.userAgent,
      langs: window.navigator.languages,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
});