$(function(){
    // $('body').html('')
    
  

    $(".btns button").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var c = $(this).data("color");
        var t = $(this).data("event");
        colorbg(c, t);       
    })

    $(".btns button").eq(2).click();

    function colorbg(c,t){
        $(".target").css("background",c).html(t);
    }

   
})