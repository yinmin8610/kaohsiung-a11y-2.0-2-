"use strict";

$(document).ready(function () {
  //下拉選單修正
  $(".navbar-nav .nav-item").hover(function () {
    $(this).toggleClass("show");
    $(this).find(".dropdown-menu").toggleClass("show");
  }); //Initialize Swiper 

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); //宣導專區 - 餐飲的影響 麵包削更換

  if (location.pathname === '/props-influence.html') {
    var ChangeBurgerMenu = function ChangeBurgerMenu(e) {
      current.title = e.target.innerHTML;
      current.innerHTML = e.target.innerHTML;
    };

    var important = document.getElementById('props-important-list');
    var technology = document.getElementById('props-influences-list');
    var current = document.getElementById('current-position');
    important.addEventListener('click', ChangeBurgerMenu, false);
    technology.addEventListener("click", ChangeBurgerMenu, false);
  } //宣導專區 -  油煙異味防治 麵包削更換


  if (location.pathname === '/props-prevent.html') {
    var _ChangeBurgerMenu = function _ChangeBurgerMenu(e) {
      _current.title = e.target.innerHTML;
      _current.innerHTML = e.target.innerHTML;
    };

    var countermeasure = document.getElementById('props-countermeasure-list');

    var _technology = document.getElementById('props-technology-list');

    var _current = document.getElementById('current-position');

    countermeasure.addEventListener('click', _ChangeBurgerMenu, false);

    _technology.addEventListener('click', _ChangeBurgerMenu, false);
  } //宣導專區 -  環保管制法規 麵包削更換


  if (location.pathname === "/props-laws.html") {
    var _ChangeBurgerMenu2 = function _ChangeBurgerMenu2(e) {
      _current2.title = e.target.innerHTML;
      _current2.innerHTML = e.target.innerHTML;
    };

    var airPollution = document.getElementById("props-airPollution-list");
    var airPollutionGuidelines = document.getElementById("props-airPollutionGuidelines-list");
    var waterPollution = document.getElementById("props-waterPollution-list");
    var waste = document.getElementById("props-waste-list");
    var noise = document.getElementById("props-noise-list");
    var management = document.getElementById("props-management-list");
    var draft = document.getElementById("props-draft-list");

    var _current2 = document.getElementById("current-position");

    airPollution.addEventListener("click", _ChangeBurgerMenu2, false);
    airPollutionGuidelines.addEventListener("click", _ChangeBurgerMenu2, false);
    waterPollution.addEventListener("click", _ChangeBurgerMenu2, false);
    waste.addEventListener("click", _ChangeBurgerMenu2, false);
    noise.addEventListener("click", _ChangeBurgerMenu2, false);
    management.addEventListener("click", _ChangeBurgerMenu2, false);
    draft.addEventListener("click", _ChangeBurgerMenu2, false);
  }
});
//# sourceMappingURL=all.js.map
