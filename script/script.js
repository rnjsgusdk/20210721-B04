$(function () {
// GNB시작
    $(".mainLi a,#subMeunBG").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
        $("div#submeunbg").stop().slideDown(800);
    });
    $(".mainLi a,#subMeunBG").mouseover(function(){
        $(".subMenu").stop().slideUp(300);
        $("div#subMeunBG").stop().slideUp(300);
    });
// GNB끝


// Slide시작
 setInterval(fnSlide, 3000);

 function fnSlide(){
 $ ("#shuttleframe").animate(
     {"margin-left":"-1200px"},
     2400,
     function(){
         $("#silde a:frist-child").insertAfter("silde a:last-child");
         $("#shuttleframe").css({"margin-left": "0"});

     }
 );

}
// Slide끝

});
