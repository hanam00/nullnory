const verticalSlider = new Swiper(".vertical-slider", {
  direction: "vertical",
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 800,
  loop: true,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 0.5,
    thresholdDelta: 10,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const horizontalSlider = new Swiper(".horizontal-slider", {
  direction: "horizontal",
  slidesPerView: 1.4,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 700,
  loop: true,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 0.5,
    thresholdDelta: 10,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.horizontal-slider_pagination',
    type: 'progressbar',
    clickable: true,
  },
});
