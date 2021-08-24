$(document).ready(function() {

let isClickLocked = true;
  
  $('.footer__holder .footer__subtitle').on('click', function() {
    if (!isClickLocked) {
      isClickLocked = true;
      $(this).next().slideToggle('swing', () => isClickLocked = false );
    }
  });

  function tabs() {
    if ($(window).width() < 960) {
      isClickLocked = false;
      $(".footer__list").hide();
    }
    else {
      isClickLocked = true;
      $('.footer__list').show();
    }
  }

  tabs();

   $(window).resize(function() {
    tabs();
     if ($(window).width() >= 780) {
      $('.header__list').attr('style', '');
      $('.btn--menu').removeClass('btn--open');
    }
   })

  $('input, textarea').on('focus', function() {
    $(this).prev().addClass('contacts__label--active');
  });

  $('input, textarea').on('blur', function() {
    if ($(this).val() == '') {
      $(this).prev().removeClass('contacts__label--active');
    }
  });

  $('.btn--menu').on('click', function() {
    $('.btn--menu').toggleClass('btn--open');
    $('.header__list').slideToggle(500);
  });

});
