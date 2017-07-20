$(function(){
           
            $(".pic li").eq(0).show();
           
            $("#position li").mouseover(function() {
                $(this).addClass('cur').siblings().removeClass("cur");
                var index = $(this).index();
                i = index;
                   $(".pic li").eq(index).show().siblings().hide();
                $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
            });
            var i=0;
            var timer=setInterval(play,2000);
            var play=function(){
                i++;
                i = i > 4 ? 0 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            var playLeft=function(){
                i--;
                i = i < 0 ? 4 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            $("#container").hover(function() {
                clearInterval(timer);
            }, function() {
                timer=setInterval(play,2000);
            });
            $("#prev").click(function(){
                playLeft();
            })
            $("#next").click(function(){
                play();
            })
        })