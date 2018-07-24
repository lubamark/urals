'use strict';

$(document).ready(function () {
  var link = $('.js-scroll-link');
  function closeMenu () {
    $('.js-nav-toggle').addClass('_close');
    $('.js-nav').removeClass('_blue');
    $('.js-logo').removeClass('_opacity');
    $('.js-scroll-menu').addClass('_closed');
    $('body').removeClass('_menu-mobile');
  }
  function toggleMenu () {
    $('.js-nav-toggle').toggleClass('_close');
    $('.js-nav').toggleClass('_blue');
    $('.js-logo').toggleClass('_opacity');
    $('.js-scroll-menu').toggleClass('_closed');
    $('body').toggleClass('_menu-mobile');
    console.log('haha');
  }
  function onScroll(evt){
    var link = $('.js-scroll-link');
    var scrollPos = $(document).scrollTop();

    link.each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.offset().top - 100 <= scrollPos) {
        link.removeClass("_active");
        currLink.addClass("_active");
        //window.location.hash = currLink.attr("href");
      }
      else{
        currLink.removeClass("_active");
      }
    });
  }
  $(function () {
    $(window).scroll(function() {
      if($(this).scrollTop() > 600) {
        $('.js-nav').fadeIn().addClass('_fixed');
      }
      else {
        $('.js-nav').removeClass('_fixed')
      }
    });
  });

  closeMenu();

  var windowWidth = $(window).width();
  $(window).resize(function () {
    windowWidth = $(window).width();
  });

  if(windowWidth <= 1024) {
    $('.js-nav-toggle').click(function () {
      toggleMenu();
    });

    $.each(link, function() {
      $(this).click(function () {
        closeMenu();
        $('body').removeClass('_menu-mobile');
      })
    })

  } else {
    $(document).on("scroll.menu", onScroll);
    //smoothscroll
    link.on('click', function (e) {
      if(!$(this).hasClass('_active')) {
        link.removeClass('_active');
        $(this).addClass('_active');
      }
      var target = this.hash,
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 98
      }, 500, function () {
      });
    });
  }
});

