$(document).ready(function () {

  const swiperindex = new Swiper('.swaper-index', {
    // параметры салйдера
    loop: true,
    slidesPerView: 1,
  
    // Подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperproject = new Swiper('.swiper-project', {
    // параметры салйдера
    loop: true,
    slidesPerView: 1,
  
    // Подключение стрелок
    navigation: {
      nextEl: '.project__button__prev',
      prevEl: '.project__button__next',
    },
  });
});