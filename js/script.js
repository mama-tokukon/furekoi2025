//wowjs
new WOW().init();


jQuery('a[href^="#"]').on('click',function() {

    var header = jQuery('.bg-menu-links').innerHeight();
    var offsetAdjustment = 20; // 追加で調整するピクセル数
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id!= '#') {
      position = jQuery(id).offset().top-offsetAdjustment;
    }
  
    jQuery('html,body').animate({
      scrollTop : position
    },
    300);
});


//アコーディオンメニューFAQ
jQuery(document).ready(function () {
    // 初期状態ですべての回答を非表示
    jQuery('.lp_faq-answer').hide();
  
    // ボタンをクリックしたら開閉
    jQuery('.lp_faq-question').on('click', function () {
      var $answer = jQuery(this).next('.lp_faq-answer');
  
      // 他を閉じる場合はこちらのコメントアウトを外す
      // jQuery('.third-answer').not($answer).slideUp();
  
      // 該当の答えを開閉
      $answer.slideToggle(300);
    });
  });