;(function($){
		
		//轮播
			var banner = $("#banner"),
			pics = $("#pics"),
			len = pics.children().size(),
			liwidth = $("#pics>li").width(),
			index = 0;  
			
		
			//左切
			banner.swipeLeft(function(){
				clearInterval(ins);
				go();
			})
			
			//右切
			banner.swipeRight(function(){
				clearInterval();
				goto();
				ins
			})
			
			
			function go(){ //0 1 2 0 1 2
				index++;
				if(index > len-1){
					index = 0;
				}
				console.log(index)
				set(index); 
			}
			
			function goto(){ 
				index--;
				if(index < 0){
					index = len-1;
				}
				set(index); 
			}
			
			var ins = setInterval(go,2000)
			
			function set(index){
				var s = "-"+index*liwidth+"px";
				
				pics.css({
					"-webkit-transform":"translateX("+s+")", 
					"-webkit-transition":"all 1s", 
				});
				$("#bar>span").eq(index).addClass("active").siblings().removeClass("active");
				
			}
})(Zepto);
