$(function () {
  $(".categories__filter-btn").on("click", function () {
    $(".categories__filter-btn").removeClass("categories__filter-btn--active");
    $(this).addClass("categories__filter-btn--active");
  });
});

var mixer = mixitup(".categories__items");
