const navIcon = document.querySelector('#nav-icon');
const testimony = document.querySelectorAll(".testimony");
const user = document.querySelectorAll(".user");
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const submit = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const application = document.querySelector('#app');
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');
const slideshow = document.querySelector('.slideshow-container');



//nav functionality
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  // navIcon.classList.toggle('slide-left');
  nav.classList.toggle('show');
  header.classList.toggle('slide-left');
  main.classList.toggle('slide-left');
  slideshow.classList.toggle('slide-left');
  footer.classList.toggle('slide-left');

});

/// carousel slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//form functionality
