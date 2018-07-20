'use strict';

(function() {
  var toggler = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-menu');
  var logo = document.querySelector('.main-nav__logo')

  var closeMenu = function () {
    menu.classList.add('main-menu--closed');
    toggler.classList.add('main-nav__toggle--close');
    logo.classList.remove('main-nav__logo--opacity');
  };
  var openMenu = function () {
    menu.classList.remove('main-menu--closed');
    toggler.classList.remove('main-nav__toggle--close');
    logo.classList.add('main-nav__logo--opacity');
  };

  closeMenu();
  toggler.addEventListener('click', function () {
    if (menu.classList.contains('main-menu--closed') &&
      toggler.classList.contains('main-nav__toggle--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
})();
