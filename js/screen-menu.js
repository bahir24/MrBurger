var menu = document.querySelector('.screen-menu');
var hamburger = document.querySelector('.hamburger-menu-link');
var close = document.querySelector('.screen-menu__close');
hamburger.addEventListener ('click', function(event) {
  event.preventDefault();
  menu.classList.add('menu__active');
  document.body.style.overflow = "hidden";
});
close.addEventListener ('click', function(event) {
  event.preventDefault();
  menu.classList.remove('menu__active');
  document.body.style.overflow = "auto";
});