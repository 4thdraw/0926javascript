var timer = 0;
setInterval( timefun, 1000)

function timefun(){
    timer++;
    timer %= 4; // 너가 아무리 증가해도 0에서 3까지 순환하게 될꺼야
    console.log(timer);
}