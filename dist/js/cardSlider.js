$(document).ready(function () {
  var swiper = new Swiper(".cardSliderBlock", {
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },

    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      840: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1290: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  var swiper2 = new Swiper(".cardSliderBlock2", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next8",
      prevEl: ".swiper-button-prev8",
    },
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })
});
