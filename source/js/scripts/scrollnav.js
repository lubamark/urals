$(document).ready(function () {
  var link = $('.js-scroll-link');
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
});

function onScroll(event){
  var link = $('.js-scroll-link');
  var scrollPos = $(document).scrollTop();

  link.each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.offset().top - 100 <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
     link.removeClass("_active");
      currLink.addClass("_active");
      window.location.hash = currLink.attr("href");
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
