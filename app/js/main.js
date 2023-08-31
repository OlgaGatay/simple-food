$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  $(".testimonials__slider").slick({
    dots: true,
  });

  $(".slick-arrow").on("click", function () {
    $(".slick-arrow").removeClass("slick-arrow--active");
    $(this).addClass("slick-arrow--active");
  });
});

var mixer = mixitup(".categories-popular__items");
