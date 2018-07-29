'use strict';

$(document).ready(function () {
  var link = $('.js-scroll-link');
  var windowWidth = $(window).width();
  var lastTimeout;

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
  }

  function debounce (fun, interval) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(fun, interval);
  }
  function unhash() {
    var sy, sx;
    if ("pushState" in history) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      sy = document.body.scrollTop;
      sx = document.body.scrollLeft;
      window.location.hash = "";

      document.body.scrollTop = sy;
      document.body.scrollLeft = sx;
    }
  }


  $(window).on('hashchange', function(e){
    e.preventDefault();
  });

  function onScroll(){
    var scrollPos = $(document).scrollTop();
    link.each(function () {
      var currLink = $(this);
      var refElement = $('[data-id='+currLink.attr("href").substring(1)+']');
      if (refElement.offset().top - 100 <= scrollPos) {
        link.removeClass("_active");
        currLink.addClass("_active");
        window.location.hash = currLink.attr("href");
      }
      else if (scrollPos < 640) {
        unhash();
        link.removeClass('_active');
      }
      else{
        currLink.removeClass("_active");
      }
    });
  }

  function menuClick(win) {
    if(win < 1024) {
      $(document).off("scroll.menu", onScroll);
      link.on('click', function () {
        closeMenu();
        var target = this.hash,
          $target = $('[data-id="'+target.substring(1)+'"]');
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 500, function () {
        });

        $('body').removeClass('_menu-mobile');
      })
    }
    else {
      closeMenu();
      $(document).on("scroll.menu", function(){
        debounce(onScroll, 150);
      });
      link.on('click', function () {
        if(!$(this).hasClass('_active')) {
          link.removeClass('_active');
          $(this).addClass('_active');
        }
        var target = this.hash,
          $target = $('[data-id="'+target.substring(1)+'"]');
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 98
        }, 500, function () {
        });
      });
    }
  }

  $(window).on('load', function(){
    var target = window.location.hash,
      $target = $('[data-id="'+target.substring(1)+'"]');
    if($target.length > 0) {
      if(windowWidth < 1024) {
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top
          }, 500, function () {
          });
      } else {
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 98
        }, 500, function () {
        });
      }
    }
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 600) {
      $('.js-nav').fadeIn().addClass('_fixed');
    }
    else {
      $('.js-nav').removeClass('_fixed');
    }
  });


  closeMenu();
  $('.js-nav-toggle').click(function () {
    toggleMenu();
  });


  menuClick(windowWidth);
  $(window).resize(function () {
    windowWidth = $(window).width();
    menuClick(windowWidth);
  });

  $('.js-down-button').click(function () {
    var target = this.hash,
      $target = $('[data-id="'+target.substring(1)+'"]');
    if (windowWidth > 1024) {
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 98
      }, 500);
    } else {
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 500);
    }
  });
});


