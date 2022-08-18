"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //SWIPER

var swiperTestimonial = new Swiper(".swiper--testimonial", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".function__next",
    prevEl: ".function__prev"
  },
  pagination: {
    el: ".function__pagination"
  }
});
//# sourceMappingURL=all.js.map
