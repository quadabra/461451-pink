var navButton = document.querySelector('.site-navigation__toggle');
var navList = document.querySelector('.site-navigation__list');
var navCont = document.querySelector('.site-navigation__container');
navList.classList.add('site-navigation__list_hidden');
navCont.classList.add('site-navigation__container_minimized');
navButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navList.classList.toggle('site-navigation__list_hidden');
  navCont.classList.toggle('site-navigation__container_minimized');
  navButton.classList.toggle('site-navigation__toggle_active');
});
