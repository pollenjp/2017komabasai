$(function() {

  //ナビゲーションメニューにhoverした時の反応
  $('.menulist').hover(
    function(){
      $(this).animate({'font-size': '25px'}, 10);
  },
    function(){
      $(this).animate({'font-size': '20px'}, 10);
  });

  //ナビゲーションバーの機能部分
  $('.header-top').click(function(){
    $('html, body').animate({'scrollTop': 0}, 500);
  });

});
