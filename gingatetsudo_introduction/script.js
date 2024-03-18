// mainへのスクロール
$(document).ready(function() {
  document.getElementById('toMain').addEventListener('click', function() {
    $("html, body").animate({ scrollTop:$('main').offset().top });
  })
});

// 固定ヘッダー(PC)
$(window).on('load', function () {
  var $body = $('body'),
      $fixedNav = $('.fixed-nav'),
      fixedNavOffsetTop = $fixedNav.offset().top;
  
  $(window).on('scroll', function () {
    if($(this).scrollTop() > fixedNavOffsetTop) {
      $body.addClass('is-fixed');
    } else {
      $body.removeClass('is-fixed');
    }
  });
});