'use strict';

(function() {
  if($(window).width() <= 1024) {
    var toggler = document.querySelector('.js-nav-toggle');
    var nav  = document.querySelector('.js-nav');
    var menu = document.querySelector('.js-scroll-menu');
    var logo = document.querySelector('.js-logo');
    var links = document.querySelectorAll('.js-scroll-link');
    var backgroundClass = ('_blue');
    var menuMobileClass = ('_menu-mobile');

    var closeMenu = function () {
      menu.classList.add('_closed');
      toggler.classList.add('_close');
      logo.classList.remove('_opacity');
      nav.classList.remove(backgroundClass);
    };
    var openMenu = function () {
      menu.classList.remove('_closed');
      toggler.classList.remove('_close');
      logo.classList.add('_opacity');
      nav.classList.add(backgroundClass);
    };
    closeMenu();
    toggler.addEventListener('click', function () {
      if (menu.classList.contains('_closed') &&
        toggler.classList.contains('_close')) {
        openMenu();
        document.body.classList.add(menuMobileClass);
      } else {
        closeMenu();
        document.body.classList.remove(menuMobileClass);
      }
    });
    $.each(links, function() {
      $(this).click(function () {
        closeMenu();
        document.body.classList.remove(menuMobileClass);
      })
    })
  }
})();

