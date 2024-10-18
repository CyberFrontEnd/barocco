$(document).ready(function () {
  var swiper2 = new Swiper(".newsSliderBlock", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      939: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
});
