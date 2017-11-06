/**
 * Plugin Name: ScrollChange
 * Description: 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｫ蜷医ｏ縺帙※Active繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱☆繧�
 * Created : Dec 2, 2015
 * Dependencies�嗚Query1.11.XX  Waypoints.js
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
    header_offset:155,

    // 讀懷�菴咲ｽｮ縺ｮ蟾ｮ蛻�ｼ亥､ｧ縺阪＞縺ｻ縺ｩ繧ｿ繝ｼ繧ｲ繝�ヨ繧医ｊ荳九↓Active螟画峩繝昴う繝ｳ繝医′譚･繧具ｼ�
    // 0縺ｯ豁｣縺励￥蜍穂ｽ懊＠縺ｾ縺帙ｓ縲�
    header_offset2:10,

    // Smooth scroll setting(On:1 Off:0)
    smooth_scroll:1,

    // Scroll speed
    scroll_speed:800,
    /**********************
     * End settings
     **********************/

    CheckActiveClass:function(ei){
      // 迴ｾ迥ｶ active縺御ｻ倅ｸ弱＆繧後※縺�ｋ縺九←縺�°繝√ぉ繝�け
      if($('.'+this.active_class_name+':eq(0)') == undefined){
          // 繧ｿ繝ｼ繧ｲ繝�ヨ縺ｫ繧ｯ繝ｩ繧ｹ莉倅ｸ�
          this.AddClass(ei);
      }else{
          // 迴ｾ蝨ｨ縺ｮactive繧貞炎髯､蠕後√け繝ｩ繧ｹ莉倅ｸ�
          this.RemoveClass().AddClass(ei);
      }
    },
    RemoveClass:function(){
        // active縺悟ｭ伜惠縺励◆繧峨√け繝ｩ繧ｹ繧貞炎髯､
        $('.'+this.active_class_name).removeClass(this.active_class_name);
        return this;
    },
    AddClass:function(sp){
        // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝昴う繝ｳ繝医�ID繧貞叙蠕励☆繧� sp:繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝昴う繝ｳ繝�
        var target_class= 'a[href*="' + sp + '"]';
        // 繧ｿ繝ｼ繧ｲ繝�ヨ縺ｮDOM繧貞叙蠕励＠縲√け繝ｩ繧ｹ霑ｽ蜉�
        $(target_class).addClass(this.active_class_name);

    }
}

$(function(){
    // active-func縺御ｻ倥＞縺ｦ縺�ｋ邂�園繧地蛟句叙蠕励☆繧�
    var w = $('.' + ScrollChange.target_name);
    var offset2 = ScrollChange.header_offset-ScrollChange.header_offset2;
    // active-func縺ｮ蝗樊焚蛻�Ν繝ｼ繝�
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

    // #縺ｧ蟋九∪繧九い繝ｳ繧ｫ繝ｼ繧偵け繝ｪ繝�け縺励◆蝣ｴ蜷医↓蜃ｦ逅�
    if(ScrollChange.smooth_scroll){
      $('a[href^=#]').click(function() {
        // 繧｢繝ｳ繧ｫ繝ｼ縺ｮ蛟､蜿門ｾ�
        var href= $(this).attr('href');

        // 遘ｻ蜍募�繧貞叙蠕�
        var target = $(href == '#' || href == '' ? 'html' : href);


        // 遘ｻ蜍募�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧呈焚蛟､縺ｧ蜿門ｾ�
        var position = target.offset().top - (ScrollChange.header_offset - 5);

        $('body,html').animate({scrollTop:position}, ScrollChange.scroll_speed);
        return false;
      });
    }
});
