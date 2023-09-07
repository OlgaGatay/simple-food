$(function () {
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 0) {
  //     $(".header").addClass("header-fixed");
  //   } else {
  //     $(".header").removeClass("header-fixed");
  //   }
  // });

  let headerTop = $(".header");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();
    if (scrollPos > 0) {
      headerTop.addClass("header-fixed");
    } else {
      headerTop.removeClass("header-fixed");
    }
  });

  $(".testimonials__slider").slick({
    dots: true,
    infinite: false,
    prevArrow:
      '<button type="button" class="testimonials__arrow testimonials__arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-arrow-slider"></use></svg></button>',
    nextArrow:
      '<button type="button" class="testimonials__arrow testimonials__arrow--next"><svg><use xlink:href="images/sprite.svg#icon-arrow-slider"></use></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(window).on("load resize", function () {
    if ($(window).width() < 768) {
      $(".restaurants__content:not(.slick-initialized)").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
      });
    } else {
      $(".restaurants__content.slick-initialized").slick("unslick");
    }
  });

  // $(".slick-arrow").on("click", function () {
  //   $(".slick-arrow").removeClass("slick-arrow--active");
  //   $(this).addClass("slick-arrow--active");
  // });
});

var mixer = mixitup(".categories-popular__items");

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mob-menu");
const bodyLock = document.querySelector("body");
//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("menu--active");
    if (mobileMenu.classList.contains("menu--active")) {
      burger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });
});

//Клик вне таргета
document.addEventListener("click", function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove("burger--active");
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  }
});
