$(function () {

    $(".mainli a,#submeunbg").mouseover(function(){
        $(".mainli a").stop().slidedown(800);
        $("div#submeunbg").slidedown(800);
    });
    $(".mainli a,#submeunbg").mouseover(function(){
        $(".mainli a").stop().slideup(800);
        $("div#submeunbg").slideup(800);
    });
});