function initializeCardCarrousel() {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

}

 initializeCardCarrousel()
// function initializeCardCarrousel() {
//   const swiper = new Swiper('.swiper', {
//     loop: true,
//     effect: 'coverflow',
//     autoplay: false,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 2,
//     centeredSlides: true,
//     centerInsufficientSlides: true,
//     coverflowEffect: {
//       depth: 100,
//       modifier: 1,
//       rotate: 50,
//       scale: 1,
//       slideShadows: true,
//       stretch: 0,
//     },
//   })
// }