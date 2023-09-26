$(function(){
    // $('body').html('')

    var count = 0; 

    $(".btns button").click(function(){
        //버튼이 클릭해야지만 실행되는 이름없는 함수
        $(this).addClass('on').siblings().removeClass('on');
        var c = $(this).data("color");
        var t = $(this).data("event");
        colorbg(c, t);       
    })

    $(".btns button").eq(count).click();
    //위치 절대 위로 못옮김 _ 화면이 열리자마자

    setInterval(function(){
        //3초마다
        count++;
        count %= 4;
        $(".btns button").eq(count).click();
    }, 3000)

    function colorbg(c,t){
        //선언적 함수
        $(".target").css("background",c).html(t);
    }
   
})