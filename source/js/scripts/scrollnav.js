function onScroll(n) {
  var t = $(document).scrollTop();
  $(".main-menu__link").each(function () {
    var n = $(this);
    $(n.attr("href")).position().top - 150 <= t ? ($(".main-menu__link").removeClass("main-menu__link--active"),
      n.addClass("main-menu__link--active")) : (n.removeClass("main-menu__link--active"), n.blur())
  })
}

$(document).ready(function () {
  $(document).on("scroll", onScroll), $('.main-menu__link[href^="#"]').on("click", function (n) {
    n.preventDefault(),
      $(document).off("scroll"), $(".main-menu__link").each(function () {
        $(this).removeClass("main-menu__link--active")
    }),
      $(this).addClass("main-menu__link--active");

    var t = this.hash;
    $target = $(t), $("html, body").stop().animate({scrollTop: $target.offset().top - 90}, 500, "swing", function () {
      $(document).on("scroll", onScroll)
    })
  })
});

$(function () {
  $(window).scroll(function(event) {
    if($(this).scrollTop() > 550) {
      $(".main-nav").fadeIn();
      $(".main-nav").addClass('main-nav--fixed')
    }
    else {
      $(".main-nav").removeClass('main-nav--fixed')
    }
  });
});
