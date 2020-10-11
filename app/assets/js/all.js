$(document).ready(() => {
  //下拉選單修正
  $(".navbar-nav .nav-item").hover(function () {
    $(this).toggleClass("show");
    $(this).find(".dropdown-menu").toggleClass("show");
  });
  //Initialize Swiper 
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});