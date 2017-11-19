$(function(){
	var slide = "#slide-wrap";
	var i = 0;
	var pics = 1; //写真の枚数（0から数える）
	$(slide).find("li").eq(0).show();
	setInterval(function(){
		if(i < pics){
			setTimeout(function(){
				$(slide).find("li").fadeOut(500);
				i++;
				setTimeout(function(){
					$(slide).find("li").eq(i).fadeIn(500);
				},500);
			},1000);
		}else if(i === pics){
			setTimeout(function(){
				$(slide).find("li").fadeOut(500);
				i = 0;
				setTimeout(function(){
					$(slide).find("li").eq(i).fadeIn(500);
				},500);
			},1000);
		}
	},1500*(pics+1));
});