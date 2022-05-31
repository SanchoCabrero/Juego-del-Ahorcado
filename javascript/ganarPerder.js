var sec;
var botones = document.getElementById("botones");
function perder(contador){
        if(contador == 9 ){
            noDetectarLetras();
            setTimeout(function(){
                alert("Fin del juego. Intentelo nuevamente...");
                if(window.screen.width < 1369){
                    botones.removeChild(botones.lastChild);
                    botones.removeChild(botones.lastChild);
                }
                jugar();
            },500);
        }
}
function ganar(palabraSorteada,contadorAdivinadas){
    if(contadorAdivinadas == (palabraSorteada.length)){
        noDetectarLetras();
        for(i = 0; i < palabraSorteada.length; i++){
            var palabraAdivinada = document.getElementById("letra " + i);
            palabraAdivinada.classList.add("palabra-adivinada");
        }
            setTimeout(function(){
                alert("Adivinó!!!");
                if(window.screen.width < 1369){
                    botones.removeChild(botones.lastChild);
                    botones.removeChild(botones.lastChild);
                }
                jugar();
            },500);
        }
    }
function noDetectarLetras(){
    document.onkeydown = function(){};
}

function timer(x){
    sec = x;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML = "Tiempo " + sec;
        sec--;
        if (sec < 0) {
            alert("Se acabó el tiempo...");
            perder(9);
            clearInterval(timer);
        }
    }, 1000);
}
