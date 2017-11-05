//headerのjQueryをここに書きます.

$(function() {

  $('header .menulists li').eq(0).css('border-left', '1px solid #000000');

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

  //スクロールしたい要素の高さの取得（普通は<body>）
  var getHeight = $('body').height();
  $(window).scroll(function () { //スクロールする度に行う処理。
    var ScrollTop = $(document).scrollTop(); //上部を基準にしたスクロール場所の取得
    var bgPosition = (600 / getHeight) * ScrollTop + 10; // 80←%を動かす値(10%→90%等), 10←初期値

    $('body').css(//background-position-yのコントロール
      {backgroundPositionY: bgPosition + "%"}
    );
  });

  //ここからレスポンシブデザイン
  $('.top_responsive').click(function(){
    $('html, body').animate({'scrollTop': 0}, 500);
  });

  $('.menu_responsive').click(function(){
    $('.menulists').slideToggle();
    return false;
  });

  $('header .menulists li').click(function(){
    $('.menulists').slideUp();
  });

  $('header #toggle .top_responsive').click(function(){
    $('.menulists').slideUp();
  });

  $(window).resize(function(){
    var win = $(window).width();
    var p = 1000;
    if(win > p){
      $('.header-top').show();
      $('.menulists').show();
    } else {
      $('.header-top').hide();
    }
  });
  //ここまでレスポンシブデザイン

});
