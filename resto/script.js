let hamburger = document.querySelector('.hamburger-lines');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(event){
  event.preventDefault();
  mobileNav.classList.toggle('open');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = link.href; 
  });
});