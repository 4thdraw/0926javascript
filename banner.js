$(function(){

    const btnea = $(".btns button").length;
    let   btnaction = 0; //버튼활성화번호

    $(".btns button").click(function(){
        clearInterval(rolling);
        btnaction = $(this).index();
        btnfun(btnaction);

        rolling = setInterval(function(){
            btnaction++;
            btnaction %= btnea;
            btnfun(btnaction);
        }, 3000)
    })

    //화면이 열리자마자 1버튼 클릭해라.
    btnfun(btnaction);

    var rolling = setInterval(function(){
        btnaction++;
        btnaction %= btnea;
        btnfun(btnaction);
    }, 3000)

    function btnfun(num){ //이벤트와 선택자에 귀속된 함수
        var obj = $(".btns button").eq(num);
        var bgc = obj.data('color');
        var textinfo = obj.data('event');        
        colorbg(bgc, textinfo, num);
    }

    //색상과 컨텐츠 삽입함수 & 버튼 활성화
    // 1 : 색상, 2 : 글자, 3버튼번호
    function colorbg(c, t, count){ 
        $(".btns button").eq(count).addClass('on').siblings().removeClass('on')     
        $(".target").css("background",c).html(t);
    }
   
})