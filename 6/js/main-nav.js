let button = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav');

menu.classList.remove('main-nav--nojs');

button.onclick = function() {
  menu.classList.toggle('main-nav--is-close');
}
