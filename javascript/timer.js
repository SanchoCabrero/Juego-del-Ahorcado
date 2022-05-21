function timer(x){
    var sec = x;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML = "Tiempo " + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
