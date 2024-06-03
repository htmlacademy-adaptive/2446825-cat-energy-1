let button = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav__list');

button.onclick = function() {
  menu.classList.toggle('main-nav__list--is-close');
  button.classList.toggle('main-nav__toggle--close');
}
