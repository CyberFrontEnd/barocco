$(document).ready(function () {
  var swiper4 = new   Swiper(".instoSliderBlock", {
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next9",
      prevEl: ".swiper-button-prev9",
    },
  });
});
