$(document).ready(function () {
  var mainCardsNav = new Swiper(".mainCardsNav", {
    slidesPerView: 2,
    direction: "vertical",
    spaceBetween: 30,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next8",
      prevEl: ".swiper-button-prev8",
    },
  });

  var mainCards = new Swiper(".mainCards", {
    effect: "fade",
    breakpoints: {
      0: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },

      561: {
        thumbs: {
          swiper: mainCardsNav,
        },
      },
    },
  });

  $('.zoomContainer').remove();

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
