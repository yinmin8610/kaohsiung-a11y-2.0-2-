$(document).ready(() => {
  //下拉選單修正
  $(".navbar-nav .nav-item").hover(function () {
    $(this).toggleClass("show");
    $(this).find(".dropdown-menu").toggleClass("show");
  });


  //停止自動輪播
  $('.carousel').carousel({
    interval: false
  })

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

  //訊息專區 -  油煙相關消息 麵包屑更換
  const information = document.getElementById("news-information-list");
  const report = document.getElementById("news-report-list");

  if (information !== null && report !== null) {
    let current = document.getElementById("current-position");
    information.addEventListener("click", ChangeBurgerMenu, false);
    report.addEventListener("click", ChangeBurgerMenu, false);
    function ChangeBurgerMenu(e) {
      current.title = e.target.innerHTML;
      current.innerHTML = e.target.innerHTML;
    }
  }

  //宣導專區 - 餐飲的影響 麵包屑更換
  const important = document.getElementById("props-important-list");
  const influences = document.getElementById("props-influences-list");

  if (important !== null && influences !== null) {
    let current = document.getElementById("current-position");
    important.addEventListener("click", ChangeBurgerMenu, false);
    influences.addEventListener("click", ChangeBurgerMenu, false);
    function ChangeBurgerMenu(e) {
      current.title = e.target.innerHTML;
      current.innerHTML = e.target.innerHTML;
    }
  }
  //宣導專區 -  油煙異味防治 麵包屑更換
  const countermeasure = document.getElementById("props-countermeasure-list");
  const technology = document.getElementById("props-technology-list");

  if (countermeasure !== null && technology !== null) {
    let current = document.getElementById("current-position");
    countermeasure.addEventListener("click", ChangeBurgerMenu, false);
    technology.addEventListener("click", ChangeBurgerMenu, false);
    function ChangeBurgerMenu(e) {
      current.title = e.target.innerHTML;
      current.innerHTML = e.target.innerHTML;
    }
  }
  //宣導專區 -  環保管制法規 麵包屑更換
  const airPollution = document.getElementById("props-airPollution-list");
  const airPollutionGuidelines = document.getElementById(
    "props-airPollutionGuidelines-list"
  );

  if (airPollution !== null && airPollutionGuidelines !== null) {
    const waterPollution = document.getElementById("props-waterPollution-list");
    const waste = document.getElementById("props-waste-list");
    const noise = document.getElementById("props-noise-list");
    const management = document.getElementById("props-management-list");
    const draft = document.getElementById("props-draft-list");
    let current = document.getElementById("current-position");
    airPollution.addEventListener("click", ChangeBurgerMenu, false);
    airPollutionGuidelines.addEventListener("click", ChangeBurgerMenu, false);
    waterPollution.addEventListener("click", ChangeBurgerMenu, false);
    waste.addEventListener("click", ChangeBurgerMenu, false);
    noise.addEventListener("click", ChangeBurgerMenu, false);
    management.addEventListener("click", ChangeBurgerMenu, false);
    draft.addEventListener("click", ChangeBurgerMenu, false);
    function ChangeBurgerMenu(e) {
      current.title = e.target.innerHTML;
      current.innerHTML = e.target.innerHTML;
    }
  }
});