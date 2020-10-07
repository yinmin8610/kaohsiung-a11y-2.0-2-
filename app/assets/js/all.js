$(document).ready(() => {
  //下拉選單修正
  $(".navbar-nav .nav-item").hover(function () {
    $(this).toggleClass("show");
    $(this).find(".dropdown-menu").toggleClass("show");
  });
  //表單無障礙提示


  const rewriteBtn = document.getElementById("rewriteBtn");
  const sendBtn = document.getElementById("sendBtn");


  // const form = document.getElementById("form");
  // const formGroup = document.querySelectorAll("form-group")
  const name = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const tel = document.getElementById("inputTel");
  const reason = document.getElementById("inputReason");
  const textarea = document.getElementById("formControlTextarea");

  $(rewriteBtn).on('click', () => {
    $.each($(this).parent().siblings().find("input"), (i, val) => {
      val.value = "";
    });
    $.each($(this).parent().siblings().find("textarea"), (i, val) => {
      val.value = "";
    })
  });

  $(sendBtn).on('click', () => {
    // console.log($(this).parent().parent())
    // const formData = $(this).parent().parent().serialize();
    // console.log(formData);
    $.ajax({
      type: 'POST',
      url: '../contact_form.php',
      dataType: "json",
      data: {
        name: name.val()
      },
      success: function (response) {
        alert(response.success);
      },
      error: function (xhr, status, error) {
        console.log(xhr);
      }
    });
  });


  if (name.value === "") {
    $(name).addClass("is-invalid");
  } else {
    $(name).addClass("is-valid");
  };
  if (email.value === "") {
    $(email).addClass("is-invalid");
  } else {
    $(email).addClass("is-valid");
  };
});