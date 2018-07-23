function onScroll(n) {
  var t = $(document).scrollTop();
  $(".main-menu__link").each(function () {
    var n = $(this);
    $(n.attr("href")).position().top - 180 <= t ? ($(".main-menu__link").removeClass("main-menu__link--active"),
      n.addClass("main-menu__link--active")) : (n.removeClass("main-menu__link--active"), n.blur())
  })
}
