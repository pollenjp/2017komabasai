/**
 * Plugin Name: ScrollChange
 * Description: スクロールに合わせてActiveクラスを付与する
 * Created : Dec 2, 2015
 * Dependencies：jQuery1.11.XX  Waypoints.js
 *ありがたく使わせていただきます(BOBOより)
 **/

var ScrollChange = new Object();
ScrollChange = {
    /**********************
     * Settings
     **********************/
    // Target class name
    target_name:'active-func',

    // Add class name
    active_class_name:'active',

    // Scroll offset
    header_offset:80,

    // 検出位置の差分（大きいほどターゲットより下にActive変更ポイントが来る）
    // 0は正しく動作しません。
    header_offset2:10,

    // Smooth scroll setting(On:1 Off:0)
    smooth_scroll:1,

    // Scroll speed
    scroll_speed:800,
    /**********************
     * End settings
     **********************/

    CheckActiveClass:function(ei){
      // 現状 activeが付与されているかどうかチェック
      if($('.'+this.active_class_name+':eq(0)') == undefined){
          // ターゲットにクラス付与
          this.AddClass(ei);
      }else{
          // 現在のactiveを削除後、クラス付与
          this.RemoveClass().AddClass(ei);
      }
    },
    RemoveClass:function(){
        // activeが存在したら、クラスを削除
        $('.'+this.active_class_name).removeClass(this.active_class_name);
        return this;
    },

    AddClass:function(sp){
        // スクロールポイントのIDを取得する sp:スクロールポイント
        var target_class= 'a[href*="' + sp + '"]';
        // ターゲットのDOMを取得し、クラス追加
        $(target_class).addClass(this.active_class_name);
    }

}

$(function(){
    // active-funcが付いている箇所をn個取得する
    var w = $('.' + ScrollChange.target_name);
    var offset2 = ScrollChange.header_offset - ScrollChange.header_offset2;
    // active-funcの回数分ループ
    for (var i = 0; i < w.length; i++) {
      new Waypoint({
        element: w[i],
        handler: function() {
            ScrollChange.CheckActiveClass(this.element.id);
        },offset:ScrollChange.header_offset
      });
      new Waypoint({
        element: w[i],
        handler: function() {
            ScrollChange.CheckActiveClass(this.element.id);
        },offset:offset2
      });
    }
});
