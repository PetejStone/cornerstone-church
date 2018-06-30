const submit = document.querySelector('#submit');
const form = document.querySelector('form');
const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('nav');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  alert('We Have Received Your Message!');
  form.reset();

});

//nav functionality
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");

  nav.classList.toggle('show');
  header.classList.toggle('slide-left');
  main.classList.toggle('slide-left');
  footer.classList.toggle('slide-left');

});
