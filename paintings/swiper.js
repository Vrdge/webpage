let  swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView:5,
  spaceBetween: 30,
  speed: 500,
  slidesOffsetAfter	:700,
  slidesOffsetBefore	:0,
  fadeEffect: {
    crossFade: true
  },
  keyboard:{
    enabled:true,
    onlyInViewport:true,
    pageUpDown:true,
  },
  autoHeight:true,
  effect:"slide",
  breakpoints:{
    400:{
      slidesPerView:2,
    },
    590:{
      slidesPerView:3,
    },
    1000:{
      slidesPerView:4,
    }
  }
});