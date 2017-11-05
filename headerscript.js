$(function() {
/*
  ==========================================================
  header block
  ==========================================================
*/
  //ナビゲーションメニューにhoverした時の反応
  $('.menulist').hover(
    function(){
      $(this).animate({'font-size': '25px'}, 10);
  },
    function(){
      $(this).animate({'font-size': '20px'}, 10);
  });

  $('.header-top').hover(
    function(){
      $(this).animate({'font-size': '40px'}, 10);
  },
    function(){
      $(this).animate({'font-size': '35px'}, 10);
  });

  //ナビゲーションバーの機能部分
  $('.header-top').click(function(){
    //var id = $(this).attr('href');
    //var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': 0}, 500);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).get(0).offsetTop;
    $('html, body').animate({'scrollTop': position - 75}, 500);
  });

  //ここからレスポンシブデザイン
  $('#toggle').click(function(){
    $('.menulists').slideToggle();
    return false;
  });

  $(window).resize(function(){
    var win = $(window).width();
    var p = 1000;
    if(win > p){
      $('.header-top').show();
      $('.menulists').show();
    } else {
      $('.header-top').hide();

/*
      $('.menulist').hover(function({
        $('.menulist').css('background-color', 'rgba(160, 160, 160, 1)');
      }, function(){
        $('.menulist').css('background-color', 'rgba(128, 128, 128, 1)');
      }));
*/

    }
  });
  //ここまでレスポンシブデザイン

/*
  var mypos = $('html, body').offset().top;

  if (0 < mypos && mypos < 100) {
    $('header a').css('color', '#ffff00';
  }
*/
/*
==========================================================
header block - top block
==========================================================
*/
/*
==========================================================
accsee block - special block
==========================================================
*/

/*
==========================================================
special block - vote block
==========================================================
*/
});
