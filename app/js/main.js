$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  $(".categories__filter-btn").on("click", function () {
    $(".categories__filter-btn").removeClass("categories__filter-btn--active");
    $(this).addClass("categories__filter-btn--active");
  });
});

var mixer = mixitup(".categories__items");
