let ball = document.getElementById('ball');
let container = document.querySelector('.container');
ball.onmousedown = function(e){
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    container.append(ball);

    function moveAt(x , y){
        ball.style.left = x - ball.offsetWidth / 2 + 'px';
        ball.style.top = y - ball.offsetHeight / 2 + 'px';
    }
    moveAt(e.pageX,e.pageY);
    function mouseMove(e){
        moveAt(e.pageX,e.pageY);
    }
    container.addEventListener('mousemove',mouseMove);
    ball.onmouseup = function(e){
        container.removeEventListener('mousemove',mouseMove);
        ballonmouseup = null;
    }
}